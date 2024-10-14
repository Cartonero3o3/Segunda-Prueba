import React, { useEffect, useState } from 'react';
import './Game.css'; 
import { useLocation } from 'react-router-dom';

const Game = () => {
    const [numPlayer, setnumPlayer] = useState(""); 
    const [revelado, setRevelado] = useState(""); 
    const [randomNumber, setRandomNumber] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [feedback, setFeedback] = useState('');
    const location = useLocation();
    const { name } = location.state;
    const min = 1;
    const max = 100;

    useEffect(()=>{
        generateNumber()
    },[]);

    const generateNumber = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(number);
    }
    console.log(randomNumber)
    const handlenumPlayer = () => {
        if ( numPlayer <= 0) {
            setFeedback('Por favor, ingrese un número.');
            return;
        }
        setAttempts(attempts + 1);

        if (numPlayer < randomNumber) {
            setFeedback('Muy bajo');
          } else if (numPlayer > randomNumber) {
            setFeedback('Muy alto');
          } else {
            setFeedback('¡Correcto!');
            setRevelado(true);
          }
    }
    return (
        <div className="game-container">
            <h1>¡Bienvenido, {name}!</h1>
            <div className="square">
                {revelado ? randomNumber : "?"}
            </div>
            <input 
                className='inputDeLocos'
                type="number"
                value={numPlayer}
                onChange={(e) => setnumPlayer(e.target.value)}
                placeholder="Ingrese su número"
            />
            <p>{feedback}</p>
            <h4>Intentos: {attempts}</h4>
            <button onClick={handlenumPlayer}>Adivinar</button>
        </div>
    );
};

export default Game;
