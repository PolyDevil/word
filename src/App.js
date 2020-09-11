import React, { useReducer } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './App.css';

const staggerConfig = {
  delayedAnimation: {
    speed: .1,
  },
};

const spring = {
  stiffness: 300,
  damping: 14,
};

const placeholder = Array.from('placeholder');
const options = [
  'word',
  'exe',
  'list',
  'melon',
];

const initialState = {
  isInTransition: false,
  isSwapped     : false,
  index         : 0,
  current       : Array.from(options[0]),
  next          : Array.from(options[1]),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "startTransition": {
      return {
        ...state,
        isInTransition: true,
      }
    }
    case "finishTransition": {
      return {
        ...state,
        isInTransition: false,
        isSwapped     : false,
      }
    }
    case "resetTransition": {
      const index = (state.index + options.length + 1) % options.length;

      return {
        ...state,
        index,
        isSwapped: true,
        current  : Array.from(options[index]),
        next     : Array.from(options[(state.index + options.length + 2) % options.length]),
      }
    }
    default: {
      return state
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function next() {
    if (!state.isInTransition) {
      dispatch({ type: 'startTransition' });
    }
  }

  function handleComplete() {
    if (state.isInTransition) {
      dispatch({ type: 'finishTransition' });
    } else if (!state.isSwapped) {
      dispatch({ type: 'resetTransition' });
    }
  }

  function shouldFlip(prevIsInTransition, currentIsInTransition) {
    return currentIsInTransition && prevIsInTransition !== currentIsInTransition;
  }

  return (
    <div className="App">
      <div className="Sentence" onClick={next}>
        <p className="Placeholder">
          {placeholder.map((d, i) => (
            <span key={i + d} className="Letter">
              {d}
            </span>
          ))}
        </p>

        <Flipper
          flipKey={state.current + state.isInTransition}
          decisionData={state.isInTransition}
        >
          <p className="Word">
            {state.current.map((d, i) => (
              <Flipped
                key={i + d}
                flipId={i + d + 'current'}
                shouldFlip={shouldFlip}
              >
                <del className={`Letter ${state.isInTransition ? '--out' : ''}`}>
                  {d}
                </del>
              </Flipped>
            ))}
          </p>
        </Flipper>

        <Flipper
          flipKey={state.next + state.isInTransition}
          decisionData={state.isInTransition}
          staggerConfig={staggerConfig}
          spring={spring}
          onComplete={handleComplete}
        >
          <p className="Word">
            {state.next.map((d, i) => (
              <Flipped
                key={i + d}
                flipId={i + d + 'next'}
                stagger="delayedAnimation"
                shouldFlip={shouldFlip}
              >
                <ins className={`Letter ${state.isInTransition ? '' : '--in'}`}>
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
