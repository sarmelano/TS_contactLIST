import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';

function AddContact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please fill out the field'),
      username: Yup.string().required('Please fill out the field'),
      phone: Yup.string().matches(/^\d+$/, "Should contain only digits").required('Please fill out the field'),
    }),
    onSubmit: (values) => {
      dispatch(addContact(values));
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
        onBlur={formik.handleBlur}
        placeholder="First Name" 
        autoComplete="name" 
      />
      {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
      <input 
        type="text" 
        name="username" 
        value={formik.values.username} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        placeholder="Last Name" 
        autoComplete="username" 
      />
      {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
      <input 
        type="text" 
        name="phone" 
        value={formik.values.phone} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        placeholder="Phone number" 
        autoComplete="tel" 
      />
      {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
      <div className='addBtns'>
        <button type="submit">Save contact</button>
        <button className='addBtnLast' type="button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
}

export default AddContact;