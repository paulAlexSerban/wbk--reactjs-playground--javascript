import React, { useState } from 'react';
import PropType from 'prop-types';
import Button from '../../atoms/Button/Button.jsx';

const Counter = ({ color, radius = '4px' }) => {
    const [count, setCount] = useState(0);
    const handleOnClick = (evtType) => {
        if (evtType === 'ADD') {
            setCount(count + 1);
            return;
        }
        setCount(count - 1);
    };

    return (
        <div
            className="counter__base"
            style={{
                backgroundColor: color,
                borderRadius: radius,
            }}
        >
            <h2 className="counter__count">Counter: {count}</h2>
            <div className="counter__btn-container">
                <Button label="-" onClick={() => handleOnClick('SUBTRACT')} radius="squared" />
                <Button label="+" onClick={() => handleOnClick('ADD')} />
            </div>
        </div>
    );
};

Counter.propTypes = {
    color: PropType.string,
    borderRad: PropType.string,
};

export default Counter;
