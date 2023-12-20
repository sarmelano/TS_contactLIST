import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './modal.scss';

function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const openModal = (id) => {
    setContactToDelete(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contactToDelete));
    setModalOpen(false);
  };

  return (
    <div>
      <DeleteConfirmationModal
        isOpen={modalOpen}
        onConfirm={handleDelete}
        onCancel={closeModal}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => openModal(contact.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
