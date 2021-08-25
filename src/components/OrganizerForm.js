import React, { useState } from "react";
import FeedCard from './FeedCard'

import dummyData from "../Mock/DummyData";


const initialFormValues = {
	firstName: "",
	lastName: "",
	date: "",
	location: "",
	theme: "",
};

export default function OrganizerFrom() {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [people, setpeople] = useState(dummyData)
	function onChange(event) {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	}

	function onSubmit(event) {
		event.preventDefault();
		setpeople([...people, formValues]);
		setFormValues(initialFormValues);
		console.log(formValues);
	}

	return (
		<div className='orgContainer'>
			<form onSubmit={onSubmit}>
				<div className='otherContainer'>
					<div>
						<label>First Name </label>
						<input
							type="text"
							name="firstName"
							value={formValues.firstName}
							onChange={onChange}
							required="required"
						/>
					</div>
					<div>
						<label>Last Name </label>
						<input
							type="text"
							required="required"
							value={formValues.lastName}
							onChange={onChange}
							name="lastName"
						/>
					</div>
					<div>
						<label>Date </label>
						<input
							type="date"
							name="date"
							value={formValues.date}
							onChange={onChange}
							required="required"
						/>
					</div>
					<div>
						<label>Location </label>
						<input
							type="text"
							name="location"
							value={formValues.location}
							onChange={onChange}
							required="required"
						/>
					</div>
					<div>
						<label>Theme </label>
						<input type="text" onChange={onChange} name="theme" />
					</div>
					<div>
						{' '}
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
			{people.map ((person, idx) => {
				return (<div>
					<FeedCard firstName={person.firstName} lastName={person.lastName} date={person.date} location={person.location} theme={person.theme} key={idx} />
				</div>)
			})}
			
		</div>
	);
}
