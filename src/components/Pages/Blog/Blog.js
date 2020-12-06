import React, { Component } from "react";

import { Link } from "react-router-dom";


// redux state
import { connect } from "react-redux";
import { getNote } from "../../../redux/actions/notesAction"

import _ from "lodash";

class Blog extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}



	componentDidMount() {
		this.props.getNote();
	}

	render() {
		const posts = _.map(this.props.posts, (post, key) => {
			return (
				<Link className="text-white bg-dark p-4 mt-3" to={"/blog/" + post.post_slug} key={post.slug}>
					<div className="post-listing">
						<h1>{post.post_title}</h1>
						<p>{post.post_description}</p>
					</div>
				</Link>
			);
		});

		const link = 'https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
		const bgStyle = {
			backgroundImage: `url(${link})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
		}


		return (
			<div style={bgStyle} className="container-fluid">
				<div className="container h-100">
					<div className="row h-100">
						<div className="col-lg-12 d-flex flex-column justify-content-center align-items-center h-100">
							{posts}
						</div>
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		posts: state.notes
	}
}

export default connect(mapStateToProps, { getNote })(Blog);

