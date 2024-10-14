import { useRef } from 'react';
import React, { useNavigate } from 'react-router-dom';
import './Home.css'; 
const Home = () => {
    const name = useRef(null)
    const navigate = useNavigate();
  
    const handleStartGame = () => {
      const playerName = name.current.value;
      if (playerName) {
        navigate('/game', { state: { name: playerName } });
      }
    };
  return (
    <div className='game-container'> 
      <h1>Bienvenido al Juego</h1>
      <input type="text" placeholder="Ingrese su nombre" ref={name} />
      <button onClick={handleStartGame}>Comenzar Juego</button>
    </div>  
  );
}

export default Home;
