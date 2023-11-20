import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import './index.css'

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setContacts(response.data);
      });
  }, []);

  const addContact = (newContact) => {
    newContact.id = Date.now(); // Генерируем уникальный id для нового контакта
    setContacts([...contacts, newContact]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddContact onAdd={addContact} />} />
        <Route path="/" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </Router>
  );
}

export default App;