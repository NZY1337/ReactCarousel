import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function RenderLinks({ path, name, index, showAdmin, subName, subPath, hasSubMenu }) {
	return (
		<>
			{!hasSubMenu ? (
				<Link key={index} className='mb-0 mr-5 font-weight-bold nav-link' to={path}>
					{name}
				</Link>
			) : (
				<NavDropdown title='ADMIN' className={`mr-5 font-weight-bold ${showAdmin}`} id='nav-dropdown'>
					<Link key={index} className='mb-0 mr-5 font-weight-bold dropdown-item' to={subPath}>
						{subName}
					</Link>
				</NavDropdown>
			)}
		</>
	);
}
