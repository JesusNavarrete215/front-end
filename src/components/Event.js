import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: ''
}

const Event = () => {

    const { id } = useParams();

    const [ event, setEvent ] = useState(initialState);
    const { title, date, time, location, description } = event;

    useEffect(() => {
        axiosWithAuth().get(`https://potluck-planner-07.herokuapp.com/api/events/${id}`)
            .then(res => {
                setEvent(res.data);
            })
            .catch(err => alert(err));
    }, [id])

    return (
        <div>
            <h1>Event</h1>
            <h1>{title}</h1>
            <h1>{date}</h1>
            <h1>{time}</h1>
            <h1>{location}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default Event;