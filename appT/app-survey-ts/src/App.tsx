import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { Survey } from './interfaces/Survey.interface';
import SurveyList from './components/TaskList';
import TaskForm from './components/TaskForm';
interface Props {
  title?: string;
  otra: number;
}

function App({ title }: Props) {
  const [surveys, setSurveys] = useState<Survey[]>([
    {
      id: 1,
      title: 'title',
      description: 'LEran much',
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: '4rem' }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h6 className="text-light d-flex justify-content-end">
                Total Surveys <span className="badge bg-primary ms-2">{surveys.length}</span>
              </h6>

              <SurveyList surveys={surveys} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
