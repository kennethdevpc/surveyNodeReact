import React from 'react';
import { Survey } from '../interfaces/Survey.interface';
import TaskCard from './TaskCard';
interface Props {
  surveys: Survey[];
}

//export default function TaskList({ surveys }: { surveys: Survey[] }) {
export default function TaskList({ surveys }: Props) {
  return (
    <>
      {surveys.map((survey, i) => (
        <div className="col-md-4 mt-2">
          <TaskCard key={i} survey={survey} />
        </div>
      ))}
    </>
  );
}
