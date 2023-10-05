import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

interface Props {
  title: string;
}
interface Survey {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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
  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: '3rem' }} />
            {title}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
