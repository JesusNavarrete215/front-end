import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

const Navigation = (props) => {

	const { authorization } = props;

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = "/";
	}

	return (
		<div>
			<header>
				<h2><Link to='/'>Putlocker Hub</Link></h2>
				<nav className="navbar">
					<Link className="a" to='/'>Home</Link>
					{ !authorization && <Link className="a" to='/login'>Login</Link>}
					{ !authorization &&<Link className="a" to='/signup'>Sign up</Link>}
					{authorization &&<Link className='a' to='/' onClick={handleLogout}>Logout</Link>}
					{ authorization && <Link className="a" to='/feed'>Feed</Link>}
				</nav>
			</header>
		</div >
	)
}

const mapStateToProps = state => {
	return ({
		authorization: state.authorization
	})
}

export default connect(mapStateToProps)(Navigation);		


