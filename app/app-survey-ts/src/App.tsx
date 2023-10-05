import React, { useState } from 'react';
import './App.css';

function App() {
  const [nu, setnu] = useState(5);
  const chang = () => {
    setnu('2');
  };
  return <div className="App"></div>;
}

export default App;
