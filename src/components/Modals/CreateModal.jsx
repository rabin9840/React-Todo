import Modal from 'react-modal';
import TodoTasks from '../TodoTasks';

const CreateModal = ({ isCreateModalOpen, closeCreateModal }) => {

    return (
        <Modal
            isOpen={isCreateModalOpen}
            onRequestClose={closeCreateModal}
            contentLabel="Create Task"
        >
            <TodoTasks closeCreateModal={ closeCreateModal} />
        </Modal>

    )
}

export default CreateModal;