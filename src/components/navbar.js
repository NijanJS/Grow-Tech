import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import whiteLogo from "../assets/images/Growtech-white.png";
import { navlinks } from "./../constants/constants";
import "../assets/styles/components.css";
import Button from "./Button";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
	const [nav2, setNav2] = useState();

	useEffect(() => {
		var menu = document.querySelector(".burger-menu");
		var nav = document.querySelector(".navigation");
		menu.addEventListener("click", () => {
			nav.classList.toggle("toggle");
		});
	},[]);
	const checkNav = () => {
		setInterval(() => {
			var location = window.location.pathname;
			if (location.includes("/services") || location.includes("/works")) {
				setNav2(true);
			} else{
				setNav2(false);
			}
		}, 200);
	};
	return (
		<>
			<div className='burger-menu'>
				<GiHamburgerMenu />
			</div>
			<div className={`navigation py-2 flex min-w-full h-20 w-screen justify-center absolute z-10 ${nav2?"nav2":''}`}>
				<div className={`navbar w-full flex h-full justify-between text-white`}>
					<div className='logo'>
						<Link to='/'>
							<img src={nav2 ? whiteLogo : logo} alt='' className='logo_img' />
						</Link>
					</div>
					<ul className='navmenu row flex space-x-12 items-center' >
						{navlinks.map((link, id) => (
							<Link
								onClick={checkNav}
								className='link px-3 py-2 flex items-center justify-center '
								key={id}
								to={`${link.children? link.children[0].path:link.path}`}>
								{link.children?<span className="flex items-center dropdown rel">{link.title} <FiChevronDown/>
									<ul className="dropdown-links flex flex-col items-start absolute bottom-0">
										{link.children.map((child,id)=><Link className="dd-link" to={child.path} key={`${child}_${id}`}>{child.title}</Link>)}
									</ul>
								</span>:link.title} 
							</Link>
							)
							
						)}
						<Link to={"/contact"}>
							<Button title='Contact Us' styles='rounded-full nav-btn' />
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
