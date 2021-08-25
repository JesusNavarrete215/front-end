import React from 'react';

export default function FeedCard(props) {
	const { firstName, lastName, date, location, theme } = props

	return (
		<div>
			<div className="feed-card">
				<div><img className="card-img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" /></div>
				<div class="name">{firstName} {lastName}</div>
				<div class="date">{date}</div>
				<div class="location">{location}</div>
				<div class="theme">{theme}</div>
			</div>
		</div>
	)
}

