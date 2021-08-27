import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import StyledEvent from "../styledComponents/StyledEvent";

const initialState = {
  title: "",
  date: "",
  time: "",
  location: "",
  description: "",
};

const Event = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(initialState);
  const { title, date, time, location, description } = event;

  useEffect(() => {
    axiosWithAuth()
      .get(`https://potluck-planner-07.herokuapp.com/api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <StyledEvent>
      <div className="eventDiv">
        <h1>Event</h1>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <h3>{time}</h3>
        <h3>{location}</h3>
        <h4>{description}</h4>
      </div>
    </StyledEvent>
  );
};

export default Event;
