import React, { ChangeEvent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
//type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  // const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
  //   setTask({ ...task, [name]: value });

  const handleInputChange = () => {
    console.log('hola');
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Survey</h1>

      <form
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          onChange={(e) => {
            console.log(e);
          }}
          value={task.title}
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          value={task.description}
        ></textarea>
        <button type="submit" onClick={(e) => {}} className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
