import React, { link, useState } from "react";

const initialFormValues = {
  firstName: "",
  lastName: "",
  data: "",
  location: "",
  theme: "",
};

export default function OrganizerFrom() {
  const [formValues, setFormValues] = useState(initialFormValues);
  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setFormValues(initialFormValues);
    console.log(formValues);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>First Name </label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={onChange}
          required="required"
        />
        <label>Last Name </label>
        <input
          type="text"
          required="required"
          value={formValues.lastName}
          onChange={onChange}
          name="lastName"
        />

        <label>Date </label>
        <input
          type="date"
          name="date"
          value={formValues.date}
          onChange={onChange}
          required="required"
        />

        <label>Location </label>
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={onChange}
          required="required"
        />

        <label>Theme </label>
        <input type="text" onChange={onChange} name="theme" />

        <button type="submit"> submit </button>
      </form>
    </div>
  );
}