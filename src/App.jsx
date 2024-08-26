import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialData from "./contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(initialData);
  const [searchValue, setsearchValue] = useState("");

  const toSearch = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onSearch={setsearchValue} />
      <ContactList contacts={toSearch} />
    </div>
  );
}
