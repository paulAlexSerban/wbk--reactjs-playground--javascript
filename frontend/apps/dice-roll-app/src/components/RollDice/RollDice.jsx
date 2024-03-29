import { useState } from 'react';
import Die from '../Die/Die';
import './rollDice.scss';
import { Button } from '@prj--reactjs-application-library/generic-lib';
import '@prj--reactjs-application-library/generic-lsg/lib/global.css';
import '@prj--reactjs-application-library/generic-lsg/lib/atoms/button.css';

const RollDice = ({ sides }) => {
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');
    const [rolling, setRolling] = useState(false);

    const roll = () => {
        //pick 2 new rolls
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];

        //set state with new rolls
        setDie1(newDie1);
        setDie2(newDie2);
        setRolling(true);

        //wait one second, then set rolling to false
        setTimeout(() => {
            setRolling(false);
        }, 1000);
    };

    return (
        <div className="rollDice">
            <div className="rollDice__container">
                <Die face={die1} rolling={rolling} />
                <Die face={die2} rolling={rolling} />
            </div>
            <Button
                label={rolling ? 'Rolling...' : 'Roll Dice!'}
                onClick={roll}
                disabled={rolling}
                size="large"
                radius="rounded"
            />
        </div>
    );
};
RollDice.defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
};

export default RollDice;
