import Modal from 'react-modal';

const DeleteModal = ({ isModalOpen, handleDelete, closeDeleteModal }) => { 
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeDeleteModal}
            contentLabel="Delete Confirmation"
        >
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this todo?</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={closeDeleteModal}>Cancel</button>
        </Modal>
    )
}

export default DeleteModal;