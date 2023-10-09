import React from 'react';
import { Survey } from '../interfaces/Survey.interface';
interface Props {
  survey: Survey;
  deleteATask: (id: number) => void;
}
export default function TaskCard({ survey, deleteATask }: Props) {
  return (
    <div>
      <div className="col-md-4 mt-2"> survey {survey.title}</div>

      <div className="card card-body bg-secondary rounded-0">
        <h3>{survey.title}</h3>
        <p>{survey.id}</p>
        <p>{survey.description}</p>
        <button
          className="btn btn-danger btn-block"
          onClick={() => survey.id && deleteATask(survey.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
