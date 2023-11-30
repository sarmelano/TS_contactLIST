import { useState } from 'react';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './modal.css';


function ContactList({ contacts, setContacts }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setModalOpen(false);
  };

  const openModal = (id) => {
    setContactToDelete(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <DeleteConfirmationModal
        isOpen={modalOpen}
        onConfirm={() => deleteContact(contactToDelete)}
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