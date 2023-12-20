import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { addContact } from './store/contactsSlice';
import './index.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        response.data.forEach(user => {
          dispatch(addContact({ name: user.name, username: user.username, phone: user.phone }));
        });
      });
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </Router>
  );
}

export default App;