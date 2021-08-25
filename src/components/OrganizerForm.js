import React, { useState } from "react";
import FeedCard from "./FeedCard";
import StyledOrganizer from "../styledComponents/StyledOrganizer";
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
  const [people, setpeople] = useState(dummyData);
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
    <StyledOrganizer>
      <div className="content-box">
        <div className="form-box">
          <h2>Create Event</h2>
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <span>First Name </span>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="input">
              <span>Last Name</span>
              <input
                type="text"
                required="required"
                value={formValues.lastName}
                onChange={onChange}
                name="lastName"
              />
            </div>
            <div className="input">
              <span>Choose Date</span>
              <input
                type="date"
                name="date"
                value={formValues.date}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="input">
              <span>Location</span>
              <input
                type="text"
                name="location"
                value={formValues.location}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="input">
              <span>Theme</span>
              <input type="text" onChange={onChange} name="theme" value={formValues.theme} />
            </div>
            <div>
              {" "}
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {people.map((person, idx) => {
          return (
              <FeedCard
                firstName={person.firstName}
                lastName={person.lastName}
                date={person.date}
                location={person.location}
                theme={person.theme}
                key={idx}
              />
          );
        })}
      </div>
    </StyledOrganizer>
  );
}
