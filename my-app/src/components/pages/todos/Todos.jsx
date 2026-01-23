import { IoIosClose } from "react-icons/io";
import "./todo.css";
import { useState } from "react";
import AddTasks from "./AddTasks";
import SearchTasks from "./SearchTasks";

const Todos = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const addNewTask = () => {
    if (newTask.trim() === "") return;
    setTask([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const found = tasks.filter((task) =>
    task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  const unfound = tasks.filter(
    (task) =>
      !task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  const deleteTasks = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="todo-wrapper">
      <div className="container-todo">
        <h1 className="title-todo">To Do List</h1>

        <div className="add-task-row">
          <AddTasks value={newTask} onChange={setNewTask} onAdd={addNewTask} />
        </div>

        <div className="serck-task-row">
          <SearchTasks value={searchValue} onChange={setSearchValue} />
        </div>

        <h2 className="count-task">
          Total tasks: <span>{tasks.length}</span>
        </h2>

        {searchValue === "" ? (
          tasks.length === 0 ? (
            <h3 className="nothing-task">There's nothing here yet</h3>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="tasks">
                {task.text}
                <IoIosClose
                  className="delete-task"
                  size={30}
                  onClick={() => deleteTasks(task.id)}
                />
              </div>
            ))
          )
        ) : (
          <>
            {found.map((task) => (
              <div key={task.id} className="tasks task-found">
                {task.text}
                <IoIosClose
                  className="delete-task"
                  size={30}
                  onClick={() => deleteTasks(task.id)}
                />
              </div>
            ))}
            {unfound.map((task) => (
              <div key={task.id} className="tasks">
                {task.text}
                <IoIosClose
                  className="delete-task"
                  size={30}
                  onClick={() => deleteTasks(task.id)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Todos;
