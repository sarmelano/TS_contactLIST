import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddContact({ onAdd }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please fill out the field'),
      username: Yup.string()
        .required('Please fill out the field'),
      phone: Yup.string()
        .required('Please fill out the field'),
    }),
    onSubmit: values => {
      onAdd(values);
      navigate('/');
    },
  });

  return (
    <form className='addContact' onSubmit={formik.handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formik.values.name} 
        onChange={formik.handleChange} 
        placeholder="First Name" 
        autoComplete="name" 
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <input 
        type="text" 
        name="username" 
        value={formik.values.username} 
        onChange={formik.handleChange} 
        placeholder="Last Name" 
        autoComplete="username" 
      />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <input 
        type="text" 
        name="phone" 
        value={formik.values.phone} 
        onChange={formik.handleChange} 
        placeholder="Phone number" 
        autoComplete="tel" 
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      <div className='addBtns'>
        <button type="submit">Save contact</button>
        <button className='addBtnLast' type="button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
}

export default AddContact;
