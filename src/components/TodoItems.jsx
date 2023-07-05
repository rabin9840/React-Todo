import tasks from "../tasks";

const TodoItems = () => {
  return (
    <div className="todo-items">
      <h1>Your Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Due Date</th>
            <th>Is Active</th>
            <th>Status</th>          
            <th>Actions</th>
          </tr>
        </thead>
              <tbody>
                  {tasks.map((task, index) => (
                      <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{task.title}</td>
                          <td>{task.description}</td>
                          <td>{task.dueDate.toISOString()}</td>
                          <td>{task.isActive.toString()}</td>
                          <td>{task.status}</td>
                          <td>
                              <button className="task-action-button">Edit</button>
                              <button className="task-action-button">Delete</button>
                          </td>
                      </tr>
                  ))}
                  
        </tbody>
      </table>
    </div>
  );
};

export default TodoItems;
