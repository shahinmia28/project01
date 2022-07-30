import React, { useState, useEffect } from "react";
import "./component/asset/bootstrap.min.css";
import "./component/style.css";
import api from "./api/ContactApi";
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";
import ContactInfo from "./component/ContactInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConfirmDelate from "./component/ConfirmDelate";
import EditContact from "./component/EditContact";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  //retriveContact

  let randomNum = Math.random() * 100000;
  // Post contact function
  const addContactHandler = async (contact) => {
    const request = {
      id: randomNum,
      ...contact,
    };
    const response = await api.post("/contact", request);
    setContacts([...contacts, response.data]);
  };
  // Edit contact Function
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contact/${contact.id}`, contact);
    const { id, name, email } = response.data;

    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // Delate contact Function
  const delateContact = async (id) => {
    await api.delete(`contact/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // get contact from server
  const retriveContacts = async () => {
    const response = await api.get("/contact");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
  }, []);

  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // Search contact function
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path={"/"}
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                delateContact={delateContact}
                Term={searchTerm}
                searchHandler={searchHandler}
              />
            )}
          />
          <Route
            path={"/add"}
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path={"/edit"}
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route path={"/contact/:id"} component={ContactInfo} />
          <Route path={"/confirm/:id"} component={ConfirmDelate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
