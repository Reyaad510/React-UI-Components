import React from 'react';
import './App.css';


import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className='container'>
     <CalculatorDisplay />
        <ActionButton text="clear" />
        <NumberButton buttonStyle='operator' text="&#247;" />
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton buttonStyle='operator' text="&#10005;" />
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton buttonStyle='operator' text="&#8722;" />
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton buttonStyle='operator' text="+" />
        <ActionButton text="0" />
        <NumberButton buttonStyle='operator' text="=" />
    </div>
  );
};

export default App;
