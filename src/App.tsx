import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./models/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState("");

  const addTask = () => {
    let newTask: Task = new Task(editingTask);
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <label>New Task Title</label>
      <input
        type={"text"}
        name={"taskEditor"}
        value={editingTask}
        onChange={(e) => setEditingTask(e.currentTarget.value)}
      ></input>
      <button onClick={() => addTask()}>Add Task</button>

      <div>
        {tasks.map((task, index) => {
          return (
            <div key={task.id}>
              <div >{task.content}</div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
