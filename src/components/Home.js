import React from 'react';
import '../App.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => {
	return (
		<div className='home-container'>
			<h1>Home</h1>
			<div className="home-info">
				<img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="home page of some food items" />
				<div className="home-content">
					<h3>Food Items</h3>
					<LoremIpsum p={1} />
				</div>
			</div>
		</div>
	)
}

export default Home;