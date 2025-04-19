import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">

			<div className="left">

				<div className="user">
					<img src="https://dummyimage.com/100x100/000/fff&text=User2" alt="Avatar" />
					<div className="info">
						<h4>User2</h4>
						<p>Online</p>
					</div>
				</div>

			</div>

			<div className="right">
				<div className="darkmode-toggle">
					<label>
						<input type="checkbox" onChange={() => {
							document.body.classList.toggle("dark-mode")
						}} />
						<span className="slider"></span>
					</label>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;