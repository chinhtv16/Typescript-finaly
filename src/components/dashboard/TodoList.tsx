import React, { useState, useEffect } from "react";
import "../../styles/todolist.scss";
import axios from "axios";
import { getTasksRoute } from "../../utils/APIRoutes";


type TaskSate = []

interface TaskMap {
   id : string
   completed : boolean
   name : string
}

function TodoList() {
  const [tasks, setTasks] = useState<TaskSate>([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get(getTasksRoute);
        setTasks(data);
      } catch (error) {
        console.log("============= error", error);
      }
    };
    handleData();
  }, []);

  return (
    <div className="content__tasklist">
      <p className="tasklist__heading">Tasks List</p>
      <div className="tasklist__content">
        <div className="content__header">
          <p>Tasks List</p>
          <i className="fa-solid fa-circle-plus"></i>
        </div>

        <ul className="content__list">
          {tasks.map((task : TaskMap) => {
            return (
              <li key={task.id} className="content__list-item">
                {task.completed ? (
                  <input type="checkbox" defaultChecked />
                ) : (
                  <input type="checkbox" />
                )}
                <span>{task.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
