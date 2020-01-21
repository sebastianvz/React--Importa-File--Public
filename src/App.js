import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [count, setCount] = useState(0);
    const [test2, setTest2] = useState('S'); 
    const [color, setColor] = useState('App-header'); 


    const handleClickTest = () => {
        debugger;
        axios.get('./helper/varibales.json') // JSON File Path
        .then( response => {
            debugger;
            let test =response.data.variable 
            setTest2(test);
            console.log(test);
            console.log(test2);
            //response.data.variable
            
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const showtest=()=>
    {
        console.log(test2);
    }

    const handleClickColor = () => {
        debugger;
        setColor('Yellow');
    }

  return (
    <div className="App">
      <header className={color}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <p>You clicked {count} times</p>
                <button onClick={() =>{
                    showtest();
                    setCount(count + 1)

                } }>
                Click me
                </button>
        </div>
        <div>
            <p>Que pasa con: {test2} de verdad.</p>
                <button onClick={handleClickTest}>
                Click 2
                </button>
        </div>
        <div>
            <p>Que pasa con: {color} de verdad.</p>
                <button onClick={handleClickColor}>
                Click 3
                </button>
        </div>
      </header>
    </div>
  );
}

export default App;
