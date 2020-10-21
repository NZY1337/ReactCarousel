import { render } from "node-sass";
import React from "react";

function RenderSublinks({ props }) {
	return (
		<div>
			<NavDropdown title='ADMIN' className='mr-5 font-weight-bold' id='nav-dropdown'>
				<NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
				<NavDropdown.Item eventKey='4.3'>Something else here</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
			</NavDropdown>
		</div>
	);
}

export default RenderSublinks;
