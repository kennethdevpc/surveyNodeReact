import React from 'react';
import { Survey } from '../interfaces/Survey.interface';
import TaskCard from './TaskCard';
interface Props {
  surveys: Survey[];
  deleteATask: (id: number) => void;
}

//export default function TaskList({ surveys }: { surveys: Survey[] }) {
export default function TaskList({ surveys, deleteATask }: Props) {
  //export default function TaskList() {
  return (
    <>
      {surveys.map((survey, i) => (
        <div className="col-md-4 mt-2" key={survey.id}>
          <TaskCard key={i} survey={survey} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
