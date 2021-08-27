import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedCard(props) {
	const { title, location, date, time, description, organizer_id } = props;

	return (
		<div>
			<div className="feed-card">
				<div><img className="card-img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt='random text'/></div>
				<div className="name">{title}</div>
				<div className="date">{date}</div>
				<div className="location">{location}</div>
				<div className="theme">{time}</div>
				<div className="theme">{description}</div>
				<button><Link to={`/feed/${organizer_id}`}>Additional Info</Link></button>
			</div>
		</div>
	)
}

