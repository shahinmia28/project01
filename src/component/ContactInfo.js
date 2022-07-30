import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <span>{email}</span>
      </div>
      <Link to={"/"}>
        <button className="btn btn-info">Back to Contact List</button>
      </Link>
    </div>
  );
};

export default ContactInfo;
