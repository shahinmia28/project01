import React from "react";
import { Link } from "react-router-dom";

const ConfirmDelate = (props) => {
  const { id, name, email } = props.location.state.delate;
  const delateContact = props.location.stateTwo.delateId;

  return (
    <div>
      <h2>Confirm Delate </h2>
      <div>
        <h4>{name}</h4>
        <span>{email}</span>
      </div>
      <Link to={"/"}>
        <button className="btn btn-info m-3" onClick={() => delateContact(id)}>
          OK
        </button>
        <button className="btn btn-info m-3">Back</button>
      </Link>
    </div>
  );
};

export default ConfirmDelate;
//onClick={() => delateContact(id)}
