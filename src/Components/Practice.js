import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Practice = () => {
  const [val, setval] = useState({
    title: "",
    by: "",
  });
  const [task, setTask] = useState([]);

  const textHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setval({ ...val, [key]: value });
  };

  const taskhandler = () => {
    const updatedTask = { ...val, id: uuidv4(), isDone: false };
    setTask([...task, updatedTask]);
    setval({
      title: "",
      by: "",
    });
  };

  const taskDoneHandler = (id) => {
    const index = task.findIndex((task) => task.id === id);
    const doneIndex = [...task] ;
    doneIndex[index].isDone = true ;
    setTask(doneIndex) ;
  };

  const deleteHandler = (id) => {
    const updatedList = task.filter((item) => item.id !== id);
    setTask(updatedList);
  };
  return (
    <>
      <div className="flex flex-col">
        <input
          type="text"
          name="title"
          className="border border-black m-4 w-[12rem]"
          onChange={(e) => {
            textHandler(e);
          }}
          value={val?.title}
        />
        <input
          type="date"
          name="by"
          className="border border-black m-4 w-[12rem]"
          onChange={(e) => {
            textHandler(e);
          }}
          value={val?.by}
        />
        <button
          className="border border-black w-[12rem] m-4 bg-blue-600 text-white"
          onClick={taskhandler}
        >
          Add task
        </button>
      </div>
      <ul>
        {task?.length > 0 &&
          task?.map((item) => {
            return (
              <div  style={{textDecoration: item?.isDone ? "line-through" : ""}}>
                <strong>
                  {item?.title} is due by {item?.by}
                </strong>
                <button
                  className="border border-black m-4 px-2"
                  onClick={() => {
                    taskDoneHandler(item?.id);
                  }}
                >
                  Task done
                </button>
                <button
                  className="border border-black m-4 px-2"
                  onClick={() => {
                    deleteHandler(item?.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default Practice;
