import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const saveContact = () => {
    // Тут ви б додали контакт до вашого API
    navigate('/');
  };

  return (
    <form className='addContact'>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ім'я" />
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Прізвище" />
      <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Телефон" />
      <div className='addBtns'>
        <button type="button" onClick={saveContact}>Зберегти</button>
        <button className='addBtnLast' type="button" onClick={() => navigate('/')}>Скасувати</button>
      </div>
    </form>
  );
}

export default AddContact;
