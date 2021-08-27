import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

const Navigation = (props) => {

	const { auth, setAuth } = props;

	const handleLogout = () => {
		localStorage.removeItem('token');
		setAuth(false);
		window.location.href = "/";
	}

	return (
		<div>
			<header>
				<div className='logo'>
					<h2><Link to='/'>Putlocker Hub</Link></h2>
				</div>
				<nav className="navbar">
					<Link className="a" to='/'>Home</Link>
					{ !auth && <Link className="a" to='/login'>Login</Link>}
					{ !auth &&<Link className="a" to='/signup'>Sign up</Link>}
					{ auth &&<Link className='a' to='/' onClick={handleLogout}>Logout</Link>}
					{ auth && <Link className="a" to='/feed'>Feed</Link>}
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


