import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../admin.scss";
import TextEditor from "../../utils/TextEditor";

import "react-datepicker/dist/react-datepicker.css";
import { EditorState, convertToRaw } from "draft-js";

// import redux;
import { connect } from "react-redux";
import { createNote } from '../../redux/actions/notesAction';

// ux
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";


class AdminBlog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// get the current state from TextEditor.js
			editorState: EditorState.createEmpty(), // or null
			post_date: null,
			post_slug: '',
			post_cover: '',
		};
	}

	setStartDate = (date) => {
		this.setState({
			date,
		});
	};

	getStateEditorCallBack = state => {
		this.setState({
			editorState: state
		})
	}

	sendNotes = (e) => {
		e.preventDefault();

		let contentState = this.state.editorState.getCurrentContent()
		let note = { content: convertToRaw(contentState) }
		note["content"] = JSON.stringify(note.content);
		this.props.createNote(note.content);

	};

	render() {

		return (
			<div className='container-fluid  admin-blog'>
				<div className='container h-100'>
					<div className='row h-100 justify-content-center'>
						<div className='col-lg-10 h-100 d-flex flex-column  justify-content-center'>
							<Form className='w-100 blog-form' onSubmit={this.sendNotes}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Post Title</Form.Label>
									<Form.Control type='text' placeholder='blog title' />
								</Form.Group>

								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Post Slug</Form.Label>
									<Form.Control type='text' placeholder='link name, eg: rdesign.com/new-design-inspiration' />
								</Form.Group>

								<Form.Group>
									<Form.Label>Post Date</Form.Label>
									<DatePicker className='form-control' selected={this.state.date} onChange={(date) => this.setStartDate(date)} />
								</Form.Group>

								<Form.Group>
									<Form.Label htmlFor="short-description-post">Short Description Post</Form.Label>
									<Form.Control type='text' id="short-description-post" placeholder='' />
								</Form.Group>

								<Form.Group>
									<Form.Label htmlFor='post-cover' className='mb-0 RichEditor-styleButton'>
										<i>Upload Post Cover</i>
										<FontAwesomeIcon className='ml-2' icon={faFileImage} size='lg' />
									</Form.Label>
									<Form.Control type='file' id="post-cover" className="d-none" />
								</Form.Group>

								<div className="editor-container">
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
