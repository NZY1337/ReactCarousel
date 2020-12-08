import React, { Component } from "react";


import Editor from "draft-js-plugins-editor";
import { EditorState, convertFromRaw, convertToRaw, convertFromHTML } from "draft-js";

import { stateToHTML } from 'draft-js-export-html';

// redux state
import { connect } from "react-redux";
import { getNote } from "../../../redux/actions/notesAction"
import _ from "lodash";

import './editor-post.scss';


class BlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: EditorState.createEmpty(),

			title: '',
			description: '',
			cover: '',
			html: ''
		}
	}

	componentDidMount() {
		this.props.getNote();
	}

	componentWillReceiveProps = (nextProps) => {
		const { slug } = this.props.match.params;

		const post = _.find(nextProps.posts, post => post.post_slug === slug)
		const postContent = post.post_content

		this.setState({
			title: post.post_title,
			description: post.post_description,
			cover: post.post_cover
		})

		// console.log(postContent)

		this.setState({
			editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(postContent))),
		});
	};


	// https://codepen.io/Kiwka/pen/YNYgWa?editors=0010 -CONVERT TO HTML

	render() {
		const bgStyle = {
			backgroundColor: 'burlywood',
			height: '100%',
			paddingTop: '12rem'
		}

		let contentState = this.state.editorState.getCurrentContent();
		const html = stateToHTML(contentState)
		console.log(typeof html)
		const asd = document.getElementById('asd');
		if (asd) { asd.innerHTML = html }

		return (
			<div style={bgStyle} className="container-fluid">
				<div className="container h-100">
					<div className="row h-100">
						<div className="col-lg-12 d-flex flex-column justify-content-center align-items-center h-100 text-white">

							<h1>{this.state.title}</h1>
							{this.state.cover && <img alt="blog-title" className="img-fluid mb-3" src={this.state.cover} />}
							<p>{this.state.description}</p>

						</div>

						<div id="asd" className="col-lg-12 editor-post mb-5">

						</div>
					</div>
				</div>
			</div >
		)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		posts: state.notes
	}
}

export default connect(mapStateToProps, { getNote })(BlogPost);

