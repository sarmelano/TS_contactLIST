function ContactList({ contacts, setContacts }) {
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
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
              <td><button className="btn-delete" onClick={() => deleteContact(contact.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;