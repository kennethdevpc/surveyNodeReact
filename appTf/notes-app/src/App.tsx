import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { Survey } from './interfaces/Survey.interface';
import TaskForm from './components/TaskForm';

interface Props {
  title?: string; //puede ir vacio
}

function App({ title }: Props) {
  const [surveys, setSurveys] = useState<Survey[]>([
    {
      id: 1,
      title: 'titlexx',
      description: 'LEran much',
      completed: false,
    },
    {
      id: 2,
      title: 'yyyyyyyyyy',
      description: 'LEran much',
      completed: false,
    },
  ]);
  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (survey: Survey): void =>
    setSurveys([...surveys, { ...survey, id: getCurrentTimestamp(), completed: false }]);
  const deleteATask = (id: number): void =>
    setSurveys(surveys.filter((survey) => survey.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: '3rem' }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              {/* <h6 className="text-light d-flex justify-content-end">
                Total Surveys <span className="badge bg-primary ms-2">{surveys.length}</span>
              </h6>

              <SurveyList surveys={surveys} /> */}
              <TaskList surveys={surveys} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
