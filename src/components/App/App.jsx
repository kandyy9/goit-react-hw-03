import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Searchbox from "../SeacrhBox/SeacrhBox";
import ContactsList from "../ContactsList/ContactsList";
import initialContacts from "../../contacts.json";
import css from "./App.module.css";

const getInitialValue = () => {
  const savedContacts = window.localStorage.getItem("saved-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialValue);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phone</h1>
      <ContactForm onAdd={addContact} getInitialValue={getInitialValue} />
      <Searchbox value={searchValue} onFilter={setSearchValue}></Searchbox>
      <ContactsList
        contacts={filteredContacts}
        value={searchValue}
        deleteContact={deleteContact}
      ></ContactsList>
    </div>
  );
}
