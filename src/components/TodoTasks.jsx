import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../actions/todos/addTodo';


const TodoTasks = ({ closeCreateModal }) => {
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos.todos);

    const initialTodoState = {
         title: '',
        description: '',
        dueDate: '',
        isActive: true,
        status: 'todo'
    }
    const [task, setTask] = useState(initialTodoState);

    // const [todoList, setTodoList]= useState([]);

    const handleAddTask = () => {
        dispatch(addTodo(task));
        setTask(initialTodoState);
    };

    const handleInputChange = (e) => {
        console.log(e.target);
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleCloseModal = () => {
        closeCreateModal();
    }

    return (
        <div className="todo-tasks">
            <div className="task">
                <h2>Title</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={task.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="task">
                <h2>Task Description</h2>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleInputChange}
                />
            </div>

            <div className="task">
                <h2>Due Date</h2>
                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleInputChange}
                />
            </div>

            <div className="task">
                <h2>Is Active</h2>
                <select
                    name="isActive"
                    value={task.isActive}
                    onChange={handleInputChange}
                >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            </div>

            <div className="task">
                <h2>Status</h2>
                <select
                    name="status"
                    value={task.status}
                    onChange={handleInputChange}
                >
                    <option value="todo">To Do</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="task-action">
                <button className="task-action-button" onClick={handleAddTask}>
                    Add Todo
                </button>
                <button className="task-action-button" onClick={handleCloseModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default TodoTasks;
