import React, { useEffect, useState } from "react";
import FeedCard from "./FeedCard";
import StyledOrganizer from "../styledComponents/StyledOrganizer";
import axiosWithAuth from './../utils/axiosWithAuth';

// const initialFormValues = {
//   firstName: "",
//   lastName: "",
//   date: "",
//   location: "",
//   theme: "",
// };

const initialFormValues = {
  organizer_id: "",
  title: "",
  location: "",
  date: "",
  time: "",
  description: "",
  //event_id: Date.now() ////move this line to the http request {...formValues, event_id: Date.now()}
};

export default function OrganizerFrom() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('https://potluck-planner-07.herokuapp.com/api/events')
      .then(res => {
        setPeople(res.data);
      })
      .catch(err => {
        alert(err);
      })
  }, [])

  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axiosWithAuth().put('https://potluck-planner-07.herokuapp.com/api/events/', {...formValues, event_id: Date.now()})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => alert(err));
    setFormValues(initialFormValues);
  }

  return (
    <StyledOrganizer>
      <div className="content-box">
        <div className="form-box">
          <h2>Create Event</h2>
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <span>Title</span>
              <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="input">
              <span>Location</span>
              <input
                type="text"
                required="required"
                value={formValues.location}
                onChange={onChange}
                name="location"
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
              <span>Choose Event Time</span>
              <input
                type="time"
                name="time"
                value={formValues.time}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="input">
              <span>Description</span>
              <input type="text" onChange={onChange} name="description" value={formValues.description} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {people.map((person, idx) => {
          return (
              <FeedCard title={person.title} location={person.location} date={person.date} time={person.time} description={person.description} organizer_id={person.organizer_id} key={idx} />
          );
        })}
      </div>
    </StyledOrganizer>
  );
}
