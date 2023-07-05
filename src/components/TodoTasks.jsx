import { useState } from 'react';

const TodoTasks = () => {
    const [isActive, setIsActive] = useState(true);
    const [status, setStatus] = useState('todo');

    const handleAddTask = () => {
        console.log('Add Task');
    }

    return (
        <div className="todo-tasks">
            <div className="task">
                <h2>Title</h2>
                <input type="text" placeholder="Task Title" />
            </div>
            <div className="task">
                <h2>Task Description</h2>
                <input type="text" placeholder="Description" />
            </div>

            <div className="task">
                <h2>Due Date</h2>
                <input type="date" />
            </div>

            
            {/* <div className="task">
                <h2>Is Active</h2>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                />
            </div> */}

            <div className="task">
                <h2>Is Active</h2>
                <select value={isActive} onChange={(e) => { setIsActive(e.target.value) }}>
                <option value="true">True</option>
                <option value="False">False</option>
                </select>
            </div>

            <div className="task">
                <h2>Status</h2>
                <select value={status} onChange={(e) => { setStatus(e.target.value) }}>
                <option value="todo">To Do</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                </select>
            </div>

            <div className="task-action">
                <button className="task-action-button" onClick={handleAddTask}>
                    Add to Task List
                </button>
                <button className='task-action-button'>Clear List</button>
            </div>



        </div>
    )
}

export default TodoTasks;