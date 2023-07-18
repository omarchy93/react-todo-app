import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleTaskInputChange = (event) => {
    setTodo(event.target.value);
  };
  const handleAddTask = (event) => {
    event.preventDefault();
    if (todo.trim() !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, todo]);
      setTodo("");
    }
  };
  const handleDeleteTask = (index) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList.splice(index, 1);
      return updatedTaskList;
    });
  };
  return (
    <div className="bg-gray-300 w-full h-screen flex items-center">
      <div className="w-[550px] mx-auto bg-white p-5 text-center ">
        <h1 className="text-4xl font-bold mb-8 mt-2 ">Todo List</h1>
        <form>
          <input
            value={todo}
            onChange={handleTaskInputChange}
            className="border-2 border-gray-950 w-full p-3 rounded-lg placeholder:text-slate-500 mb-5 "
            type="text"
            placeholder="Add a list"
          />
          <button
            onClick={handleAddTask}
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-600 py-2 px-8 mb-10 text-white rounded-lg"
          >
            Add Todos
          </button>
        </form>
        <div className="todo-show-area">
          <ul>
            {taskList.map((task, index) => (
              <li
                key={index}
                className="py-5 px-5 rounded-lg  bg-cyan-950 hover:bg-cyan-800 text-white text-left text-lg flex  justify-between my-2"
              >
                {task}
                <span
                  onClick={() => handleDeleteTask(index)}
                  className="text-2xl cursor-pointer text-teal-200 hover:text-3xl"
                >
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
