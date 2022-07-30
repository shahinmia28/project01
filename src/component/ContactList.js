import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const delateContact = (id) => {
    props.delateContact(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div key={Math.random()}>
        <ContactCard
          contact={contact}
          delateContact={delateContact}
          key={contact.id}
        />
      </div>
    );
  });

  return (
    <div className="p-3">
      <div>
        <h2>Contact List</h2>
        <Link to={"/add"}>
          <button className="btn btn-info"> Back to Add Contact</button>
        </Link>
      </div>
      <form className="d-flex m-2">
        <input
          className="form-control me-2 py-2"
          type="search"
          placeholder="Search Contact"
          aria-label="Search"
          value={props.Term}
          onChange={(e) => props.searchHandler(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass search"></i>
      </form>
      {renderContactList.length > 0 ? renderContactList : "No result matches"}
    </div>
  );
};

export default ContactList;
