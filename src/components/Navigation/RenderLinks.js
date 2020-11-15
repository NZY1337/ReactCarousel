import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function RenderLinks({ path, name, index, showAdmin, subParentName, hasSubMenu, sublinks }) {
	return (
		<>
			{!hasSubMenu ? (
				<Link key={index} className='mb-0 mr-5 font-weight-bold nav-link' to={path}>
					{name}
				</Link>
			) : (
					<NavDropdown title={subParentName} className={`mr-5 font-weight-bold ${showAdmin}`} id='nav-dropdown'>
						{sublinks.map((sublink) => {
							return (
								<>
									<Link

										key={index}
										className='mb-0 mr-5 font-weight-bold dropdown-item'
										to={sublink.path}>
										{sublink.name}
									</Link>
								</>
							);
						})}
					</NavDropdown>
				)}
		</>
	);
}
