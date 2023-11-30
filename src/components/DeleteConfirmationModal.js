function DeleteConfirmationModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Are you sure you want to delete this contact?</h2>
        <div className='modal-wrapper_btns'>
          <button className='modal_btn' onClick={onConfirm}>Delete</button>
          <button className='modal_btn' onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;