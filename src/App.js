import React, { useState, useEffect } from 'react';
import AnimatedWord from 'components/AnimatedWord';
import './App.css';
import { wordList } from './data';

const getRandomInteger = (min = 0, max = 10) => Math.floor(Math.random() * max) + min;

function App() {
  const [lastAnimated, setLastAnimated] = useState([]);
  const [animate, setAnimate] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      let int = getRandomInteger(0, wordList.length - 1);
      while(lastAnimated.includes(int)) {
        int = getRandomInteger(0, wordList.length - 1);
      }
      setAnimate(int);

      if (lastAnimated.length < 3) {
        setLastAnimated([...lastAnimated, int]);
      } else {
        setLastAnimated([...lastAnimated.slice(1), int]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [lastAnimated]);

  return (
    <div className="App">
      {wordList.map((e, i) => (
        <AnimatedWord key={e.placeholder} id={i} data={e} animate={animate} />
      ))}
    </div>
  );
}

export default App;
