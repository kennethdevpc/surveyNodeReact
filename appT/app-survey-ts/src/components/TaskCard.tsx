import React from 'react';
import { Survey } from '../interfaces/Survey.interface';
interface Props {
  survey: Survey;
}
//export default function TaskCard(survey: Survey) {
export default function TaskCard({ survey }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0">
      <h3>{survey.title}</h3>
      <p>{survey.id}</p>
      <p>{survey.description}</p>
      <button className="btn btn-danger btn-block" onClick={() => survey.id}>
        Delete
      </button>
    </div>
  );
}
