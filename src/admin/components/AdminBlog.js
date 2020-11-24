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


class AdminBlog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: null
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
						<div className='col-lg-12 h-100 d-flex flex-column  justify-content-center'>
							<Form className='w-100' onSubmit={this.sendNotes}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Blog Title</Form.Label>
									<Form.Control type='text' placeholder='blog title' />
								</Form.Group>

								<Form.Group>
									<Form.Label>Select Date</Form.Label>
									<DatePicker className='form-control' selected={this.state.date} onChange={(date) => this.setStartDate(date)} />
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
