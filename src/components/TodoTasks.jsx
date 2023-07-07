import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const TodoTasks = ({closeCreateModal}) => {
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
        const formattedTask = {
            ...task,
            dueDate:moment(task.dueDate).format('M/D/YYYY')
            // new Date(task.dueDate).toISOString()
          };
        console.log(formattedTask); // Object containing entered data
  
        axios.post('http://localhost:3000/todos', formattedTask)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });




        // setTodoList((prevTodoList) => [...prevTodoList, task]);
        // console.log(todoList); // Array containing all tasks

        // Resetting the task state to initial value
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
                    Add to Task List
                </button>
                <button className="task-action-button" onClick={handleCloseModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default TodoTasks;
