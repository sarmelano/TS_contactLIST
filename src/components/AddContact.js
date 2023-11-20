import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact({ onAdd }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const saveContact = () => {
    const newContact = {
      name,
      username,
      phone
    };

    // Вызываем функцию onAdd, переданную через props, чтобы добавить новый контакт
    onAdd(newContact);

    navigate('/');
  };

  return (
    <form className='addContact'>
      <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="First Name" autoComplete="name" />
      <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Last Name" autoComplete="username" />
      <input type="text" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" autoComplete="tel" />
      <div className='addBtns'>
        <button type="button" onClick={saveContact}>Save contact</button>
        <button className='addBtnLast' type="button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
}

export default AddContact;