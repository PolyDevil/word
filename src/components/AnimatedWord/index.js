import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './style.css';

const staggerConfig = {
  delayedAnimation: {
    speed: 1,
  },
};

const spring = {
  stiffness: 400,
  damping: 16,
};

const initialState = {
  isInTransition: false,
  isSwapped     : false,
  options       : [],
  index         : 0,
  current       : [],
  next          : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setOptions": {
      return {
        ...state,
        options: action.options,
        index  : 0,
        current: Array.from(action.options[0]),
        next   : Array.from(action.options[1]),
      }
    }
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
      const index = (state.index + state.options.length + 1) % state.options.length;

      return {
        ...state,
        index,
        isSwapped: true,
        current  : Array.from(state.options[index]),
        next     : Array.from(state.options[(state.index + state.options.length + 2) % state.options.length]),
      }
    }
    default: {
      return state
    }
  }
}

const shouldFlip = (prev, current) => current && current !== prev;

function AnimatedWord({
  id,
  data: {
    options,
    placeholder: placeholderString = '',
  },
  animate,
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () => {
      if (id === animate) {
        dispatch({ type: 'startTransition' });
      }
    },
    [id, animate]
  );

  useEffect(
    () => dispatch({ type: 'setOptions', options }),
    [options]
  );

  const placeholder = useMemo(
    () => Array.from(placeholderString),
    [placeholderString]
  );

  const next = useCallback(
    () => {
      if (!state.isInTransition) {
        dispatch({ type: 'startTransition' });
      }
    },
    [state.isInTransition],
  );

  const handleComplete = useCallback(
    () => {
      if (state.isInTransition) {
        dispatch({ type: 'finishTransition' });
      } else if (!state.isSwapped) {
        dispatch({ type: 'resetTransition' });
      }
    },
    [state.isInTransition, state.isSwapped],
  );

  return (
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
              <del
                className="Letter"
                data-state={state.isInTransition ? '--out' : ''}
              >
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
              <ins
                className="Letter"
                data-state={state.isInTransition ? '' : '--in'}
              >
                {d}
              </ins>
            </Flipped>
          ))}
        </p>
      </Flipper>
    </div>
  );
}

export default AnimatedWord;
