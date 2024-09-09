import React, { useRef, useState } from 'react';
import d1 from './assets/dice1.png';
import d2 from './assets/dice2.png';
import d3 from './assets/dice3.png';
import d4 from './assets/dice4.png';
import d5 from './assets/dice5.png';
import d6 from './assets/dice6.png';


const DiceRoll = () => {
    const [images] = useState([d1, d2, d3, d4, d5, d6]);
    const [values, setValues] = useState([Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]);
    const [showValues, setShowValues] = useState(false); 
    const imgRef1 = useRef();
    const imgRef2 = useRef();

    const handleRolling = () => {
        setShowValues(false); 

        const interval = setInterval(() => {
            const newValue1 = Math.floor(Math.random() * 6);
            const newValue2 = Math.floor(Math.random() * 6);
            imgRef1.current.src = images[newValue1];
            imgRef2.current.src = images[newValue2];
        }, 100); 

        setTimeout(() => {
            clearInterval(interval);
            const finalValue1 = Math.floor(Math.random() * 6);
            const finalValue2 = Math.floor(Math.random() * 6);
            setValues([finalValue1, finalValue2]);
            imgRef1.current.src = images[finalValue1];
            imgRef2.current.src = images[finalValue2];
            setShowValues(true); 
        }, 5000); 
    };

    return (
        <div className="dice-roll-container">
            <h1>Roll the Dice Randomly..</h1>
            <div className="dice-container">
                <div className="dice">
                    <img src={images[values[0]]} ref={imgRef1} alt='Dice 1' className="dice-image" />
                    {showValues && <div className="dice-value">{values[0] + 1}</div>} 
                </div>
                <div className="dice">
                    <img src={images[values[1]]} ref={imgRef2} alt='Dice 2' className="dice-image" />
                    {showValues && <div className="dice-value">{values[1] + 1}</div>} 
                </div>
            </div>
            <button onClick={handleRolling} className="roll-button">Roll!</button>
        </div>
    );
}

export default DiceRoll;
