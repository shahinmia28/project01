import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const delateContact = (id) => {
    props.delateContact(id);
  };
  return (
    <div className="item m-2 p-2 row">
      <div className="col-1">
        <img
          className="images w-75 m-auto rounded-circle"
          src={user}
          alt="user"
        />
      </div>

      <div className="content col-7">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <h4>{name}</h4>
          <span>{email}</span>
        </Link>
      </div>

      <div className="col-4 icon my-auto">
        <Link
          to={{
            pathname: "/edit",
            state: { delate: props.contact },
          }}
        >
          <i className="p-2 edit">Edit</i>
        </Link>
        <Link
          to={{
            pathname: `/confirm/${id}`,
            state: { delate: props.contact },
            stateTwo: { delateId: delateContact },
          }}
        >
          <i className="far fa-trash-alt fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
// props.contact
