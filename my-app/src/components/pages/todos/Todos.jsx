import { IoIosClose } from "react-icons/io";
import "./todo.css";
import { useState } from "react";
import AddTasks from "./AddTasks";
import SearchTasks from "./SearchTasks";

const Todos = () => {
  //State with all tasks
  const [tasks, setTask] = useState([]);
  //new text from the add field
  const [newTask, setNewTask] = useState("");
  //text from the search field
  const [searchValue, setSearchValue] = useState("");

  const addNewTask = () => {
    if (newTask.trim() === "") return;
    setTask([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };
  // Tasks that match the search query
  const found = tasks.filter((task) =>
    task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  //Tasks that do NOT match the search query
  const unfound = tasks.filter(
    (task) =>
      !task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  //Remove task by id
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
            // Add a new task to the list if the search field is empty and if the task is not equal to 0
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
            {/* output of search tasks */}
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
