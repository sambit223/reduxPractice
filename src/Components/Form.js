import React, { useState } from "react";

const Form = () => {
  const [list, setList] = useState({
    title: "",
    mail: "",
    date: "",
  });

  const [task, settask] = useState([]);

  const handleTask = () => {
    settask([...task, list]);
    setList({
      title: "",
      mail: "",
      date: "",
    });
  };

  const handleInputChange = (e) => {
    const key = e?.target.name;
    const value = e?.target.value;
    setList({ ...list, [key]: value });
  };

  const editHandler = (item) => {
    const index = task.findIndex(item) ;
    setList({
        title: item.title,
        mail: item.mail,
        date: item.date,
      });
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="border border-black h-[15rem] w-[45rem]">
        <div className="flex gap-2 m-4">
          <label>Name : </label>
          <input
            type="text"
            className="border border-black p-1 mx-4"
            name="title"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={list.title}
          />
        </div>
        <div className="flex gap-2 m-4">
          <label>Email : </label>
          <input
            type="text"
            className="border border-black p-1 mx-5"
            name="mail"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={list.mail}
          />
        </div>
        <div className="flex gap-2 m-4">
          <label>Date : </label>
          <input
            type="date"
            className="border border-black p-1 mx-6"
            name="date"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={list.date}
          />
        </div>
        <button
          className="border border-black bg-sky-500 text-white p-1 ml-5 w-[7rem]"
          onClick={handleTask}
        >
          Add Me
        </button>
      </div>
      {task.map((elem) => {
        return (
          <div>
            <strong>{elem?.title} </strong>has to complete the task by{" "}
            <strong>{elem?.date} </strong>
            <button
              className="border border-black bg-sky-500 text-white p-1 ml-5 w-[7rem]"
              onClick={() => {
                editHandler(elem);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
