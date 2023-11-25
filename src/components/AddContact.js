import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact({ onAdd }) {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const validateFields = () => {
    const { name, username, phone } = formValues;
    if(name === '' || username === '' || phone === '') {
      setError('Пожалуйста, заполните все поля');
      return false;
    }
    return true;
  };

  const saveContact = () => {
    if (!validateFields()) return;

    onAdd(formValues);
    navigate('/');
  };

  return (
    <form className='addContact'>
      <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="First Name" autoComplete="name" />
      <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="Last Name" autoComplete="username" />
      <input type="text" name="phone" value={formValues.phone} onChange={handleChange} placeholder="Phone number" autoComplete="tel" />
      {error && <div>{error}</div>}
      <div className='addBtns'>
        <button type="button" onClick={saveContact}>Save contact</button>
        <button className='addBtnLast' type="button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
}

export default AddContact;
