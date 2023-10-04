import { ChangeEvent, useState } from "react";
import React, { FC } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workday, setWorkday] = useState<number>();

  const [todoList, setTodoList] = useState<todoType[]>([]);
  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkday(Number(event.target.value));
    }
  };
  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workday };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkday(0);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };

  return (
  
      <div className="App ">
        <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          onChange={handleChange}
          name="task"
          value={task}
          placeholder="Görev Giriniz"
        />
        <input
          className="maincardinput"
          type="number"
          onChange={handleChange}
          name="workDay"
          value={workday}
          placeholder="kaç günde tamamlamalısınız"
        />
        <button className="maincardbutton" onClick={addNewTask}>Yeni task ekle</button>
     
      <div className="todocart" >
        {todoList.map((task: todoType, index: Number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
        </div>
        </div>
      </div>
 
  );
};

export default App;
