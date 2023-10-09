import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Survey } from '../interfaces/Survey.interface';
interface Props {
  addANewTask: (survey: Survey) => void;
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const inititalState = {
  title: '',
  description: '',
};
export default function SurveyForm({ addANewTask }: Props) {
  const [survey, setSurvey] = useState(inititalState);

  // const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
  //   setSurvey({ ...survey, [name]: value });
  //Forma ken:
  const handleInputChange = (e: HandleInputChange) => {
    console.log(e.target.name, e.target.value);
    setSurvey({ ...survey, [e.target.name]: e.target.value });
  };
  const handleNewTask = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addANewTask(survey);
    setSurvey(inititalState);
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Survey</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={survey.title}
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          value={survey.description}
        ></textarea>
        <button type="submit" onClick={(e) => {}} className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
