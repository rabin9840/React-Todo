import { useState } from 'react';

const TodoTasks = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        isActive: true,
        status: 'todo'
    });

    const [todoList, setTodoList]= useState([]);

    const handleAddTask = () => {
        console.log(task); // Object containing entered data
        setTodoList((prevTodoList) => [...prevTodoList, task]);
        console.log(todoList); // Array containing all tasks

        // Resetting the task state to initial value
        setTask({
            id: task.id + 1,
            title: '',
            description: '',
            dueDate: '',
            isActive: true,
            status: 'todo'
        });
    };

    const handleInputChange = (e) => {
        console.log(e.target);
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

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
                <button className="task-action-button">Clear List</button>
            </div>
        </div>
    );
};

export default TodoTasks;
