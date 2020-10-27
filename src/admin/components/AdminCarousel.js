import React, { Component } from "react";

class AdminCarousel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12'>
						<img
							className='img-fluid'
							src='https://images.unsplash.com/photo-1586489398179-e374c1437a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
							alt=''
						/>
						<h1>This is the Contact Page</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminCarousel;
