import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../admin.scss";
import TextEditor from "../../utils/TextEditor";

import "react-datepicker/dist/react-datepicker.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

// import redux;
import { connect } from "react-redux";
import { createNote } from '../../redux/actions/notesAction';

// ux
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

// firebase storage
import { storage } from '../../firebase';


class AdminBlog extends Component {
	constructor(props) {
		super(props);

		this.textAreaMaxLen = React.createRef()
		this.state = {
			// get the current state from TextEditor.js
			editorState: EditorState.createEmpty(), // or null
			post_date: new Date(),
			post_slug: '',
			post_title: '',
			post_description: '',
			post_cover_url: '',
			char_count: 0
		};
	}

	componentDidMount = () => {
		this.setState({
			char_count: this.textAreaMaxLen.current.getAttribute('maxlength')
		})
	}

	handlePostDate = (post_date) => {
		this.setState({
			post_date
		});

		console.log(post_date)
	};

	handlePostSlug = (e) => {
		this.setState({
			post_slug: e.target.value
		});
	};

	handlePostTitle = (e) => {
		this.setState({
			post_title: e.target.value
		});
	};


	getStateEditorCallBack = (state) => {
		this.setState({
			editorState: state,
		})
	}

	handlePostDescription = e => {
		const LEN = e.target.value.length;
		const MAX_LENGTH = this.textAreaMaxLen.current.getAttribute('maxlength')

		this.setState({
			char_count: MAX_LENGTH - Number(LEN),
			post_description: e.target.value
		})
	}

	handleUploadCoverPhotoToFB = (e) => {
		e.persist();

		if (e.target.files[0]) {
			const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
			uploadTask.on(
				"state_changed",
				snapshot => { },
				error => {
					console.log(error)
				},
				() => {
					storage
						.ref("images")
						.child(e.target.files[0].name)
						.getDownloadURL()
						.then(url => {
							this.setState({
								post_cover_url: url
							})
						})
				}
			)
		}
	};


	sendNotes = (e) => {
		e.preventDefault();

		// get current state of the Editor
		let contentState = this.state.editorState.getCurrentContent();

		// post object
		let blog_post = {
			post_content: convertToRaw(contentState),
			post_description: this.state.post_description,
			post_title: this.state.post_title,
			post_date: new Date().getTime(),
			post_slug: this.state.post_slug,
			post_cover: this.state.post_cover_url
		}

		// sending the stringified version of convertedToRow object to DB
		blog_post["post_content"] = JSON.stringify(blog_post.post_content);

		// redux function which sends the data to ;DB
		this.props.createNote(blog_post);

	};

	render() {
		return (
			<div className='container-fluid  admin-blog mb-5'>
				<div className='container h-100'>
					<div className='row h-100 justify-content-center'>
						<div className='col-lg-10 h-100 d-flex flex-column  justify-content-center'>
							<Form className='w-100 blog-form' onSubmit={this.sendNotes}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Post Title</Form.Label>
									<Form.Control type='text' required placeholder='blog title' onChange={this.handlePostTitle} />
								</Form.Group>

								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Post Slug</Form.Label>
									<Form.Control type='text' onChange={this.handlePostSlug} required placeholder='link name, eg: rdesign.com/new-design-inspiration' />
								</Form.Group>

								<Form.Group>
									<Form.Label>Post Date</Form.Label>
									<DatePicker className='form-control' required selected={this.state.post_date} onChange={(date) => { this.handlePostDate(date) }} />
								</Form.Group>

								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Short Description Post</Form.Label>
									<Form.Control ref={this.textAreaMaxLen} as="textarea" required maxlength="250" onKeyUp={this.handlePostDescription} rows={3} />
								</Form.Group>

								<p className="text-danger">{`${this.state.char_count} chars left`}</p>

								<Form.Group>
									<Form.Label htmlFor='post-cover' className='mb-0 RichEditor-styleButton'>
										<i>Upload Post Cover</i>
										<FontAwesomeIcon className='ml-2' icon={faFileImage} size='lg' />
									</Form.Label>
									<Form.Control type='file' id="post-cover" className="d-none" onChange={this.handleUploadCoverPhotoToFB} />
								</Form.Group>

								<div className="editor-container">
									{this.state.post_cover_url && <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} alt="post cover img" src={this.state.post_cover_url} />}
									<TextEditor getStateEditorCallBack={this.getStateEditorCallBack} />
								</div>


								<Button className='mt-3' variant='danger' type='submit'>
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		post: state.notes
	}
}

export default connect(mapStateToProps, { createNote })(AdminBlog);
