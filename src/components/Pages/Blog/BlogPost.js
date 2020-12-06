import React, { Component } from "react";


import Editor from "draft-js-plugins-editor";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";


// redux state
import { connect } from "react-redux";
import { getNote } from "../../../redux/actions/notesAction"
import _ from "lodash";

class BlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: EditorState.createEmpty(),

			title: '',
			description: '',
			cover: ''
		}
	}

	componentDidMount() {
		this.props.getNote();
	}

	componentWillReceiveProps = (nextProps) => {
		const { slug } = this.props.match.params;

		const post = _.find(nextProps.posts, post => post.post_slug === slug)

		this.setState({
			title: post.post_title,
			description: post.post_description,
			cover: post.post_cover
		})

		if (nextProps.posts !== null) {
			let item = "";
			_.map(nextProps.posts, (note, key) => {
				item = note.post_content
			});

			this.setState({
				editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(item))),
			});
		}
	};


	// https://codepen.io/Kiwka/pen/YNYgWa?editors=0010 -CONVERT TO HTML

	render() {
		const bgStyle = {
			backgroundColor: 'black',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
		}


		return (
			<div style={bgStyle} className="container-fluid">
				<div className="container h-100">
					<div className="row h-100">
						<div className="col-lg-12 d-flex flex-column justify-content-center align-items-center h-100 text-white">

							<h1>{this.state.title}</h1>
							{this.state.cover && <img alt="blog-title" className="img-fluid col-lg-6" src={this.state.cover} />}
							<p>{this.state.description}</p>

							<Editor editorState={this.state.editorState} />

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

