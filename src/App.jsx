import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialData from "./contacts.json";

export default function App() {
  const getInitialContacts = () => {
    const savedContacts = window.localStorage.getItem("updatedContacts");
    const parsedContacts = JSON.parse(savedContacts);

    return savedContacts !== null && parsedContacts.length > 0
      ? parsedContacts
      : initialData;
    //return savedContacts !== null ? JSON.parse(savedContacts) : [] - щоб не залишати дефолтних значень в localStorage
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("updatedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const toSearch = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prev => {
      // console.log(newContact);
      return [...prev, newContact];
    });
  };

  const removeContact = contactId => {
    // console.log(contactId);
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  // window.localStorage.clear();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchValue} onSearch={setsearchValue} />
      <ContactList contacts={toSearch} onDelete={removeContact} />
    </div>
  );
}
