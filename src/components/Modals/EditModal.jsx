import Modal from 'react-modal';
import { useState } from 'react';

const EditModal = ({ isEditModalOpen, closeEditModal, handleEdit, initialTodo }) => {
    const [todo, setTodo] = useState(initialTodo);
    
    const handleInputChange = (e) => {
        const { name, value }= e.target;
        setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        handleEdit(todo);
        closeEditModal();
    }
    return(
        <Modal 
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Confirmation"
        >
            <h2>Edit Todo</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text"
                        name="title"
                        placeholder={todo.title ? undefined : initialTodo.title}
                        value={todo.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder={todo.description ? undefined : initialTodo.description}
                        value={todo.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={todo.dueDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Is Active:</label>
                    <select
                        name="isActive"
                        value={todo.isActive}
                        onChange={handleInputChange}
                    >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>

                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={todo.status}
                        onChange={handleInputChange}
                    >
                        <option value="todo">todo</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Save</button>
                    <button onClick={closeEditModal}>Cancel</button>
                </div>
            </form>
            
        </Modal>
    )

}

export default EditModal;