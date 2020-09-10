import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './App.css';

const placeholder = Array.from('placeholder');

const option1 = Array.from('word');
const option2 = Array.from('exe');

const staggerConfig = {
  delayedAnimation: {
    speed: .1,
  },
};

const spring = {
  stiffness: 300,
  damping: 14,
};

function App() {
  const [data1, setData1] = useState(option1);
  const [data2, setData2] = useState(option2);
  const [index, setIndex] = useState(0);
  const swap = () => {
    if (index === 0) {
      setData1(option2);
      setData2(option1);
      setIndex(1);
    } else {
      setData1(option1);
      setData2(option2);
      setIndex(0);
    }
    setShow(false);
  };

  const [show, setShow] = useState(false);
  const toggle = () => {
    console.log('toggle', show);
    if (show) {
      swap();
    } else {
      setShow(!show);
    }
  };

  return (
    <div className="App">
      <div className="Sentence" onClick={toggle}>
        <p className="Placeholder">
          {placeholder.map((d, i) => (
            <span key={i + d} className="Letter">
              {d}
            </span>
          ))}
        </p>

        <Flipper
          flipKey={[show, index].join("")}
        >
          <p className="Word">
            {data1.map((d, i) => (
              <Flipped key={i + d} flipId={i + d}>
                <del className={`Letter ${show ? '--out' : ''}`}>
                  {d}
                </del>
              </Flipped>
            ))}
          </p>
        </Flipper>

        <Flipper
          flipKey={[show, index].join("")}
          staggerConfig={staggerConfig}
          spring={spring}
        >
          <p className="Word">
            {data2.map((d, i) => (
              <Flipped key={i + d} flipId={i + d} stagger="delayedAnimation">
                <ins className={`Letter ${show ? '' : '--initial'}`}>
                  {d}
                </ins>
              </Flipped>
            ))}
          </p>
        </Flipper>
      </div>
    </div>
  );
}

export default App;
