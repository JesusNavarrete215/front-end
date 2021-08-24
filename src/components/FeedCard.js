import React from 'react';

export default function FeedCard(props) {
	const { firstName, lastName, date, location, theme } = props

	return (
		<div>
			<div className="feed-card">
				<div>First name: {firstName}</div>
				<div>Last name: {lastName}</div>
				<div>Date: {date}</div>
				<div>Location: {location}</div>
				<div>Theme: {theme}</div>
			</div>
		</div>
	)
}
