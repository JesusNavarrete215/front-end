import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
	return (
		<div>
			<header>
				<h2><Link to='/'>Putlocker Hub</Link></h2>
				<nav className="navbar">
					<Link className="a" to='/'>Home</Link>
					<Link className="a" to='/login'>Login</Link>
					<Link className="a" to='/signup'>Sign up</Link>
					<Link className="a" to='/feed'>Feed</Link>
				</nav>
			</header>
		</div >
	)
}

export default Navigation;