import React from 'react';
import AnimatedWord from 'components/AnimatedWord';
import './App.css';
import { wordList } from './data';

function App() {
  return (
    <div className="App">
      {wordList.map(e => (
        <AnimatedWord key={e.placeholder} data={e} />
      ))}
    </div>
  );
}

export default App;
