import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movePlayer, rollDice, setErrorMessage} from "../features/gameSlice.jsx";

const diceImages = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png',
]

const Dice = () => {

    const dispatch = useDispatch()
    const dice = useSelector((state) => state.game.dice)

    const handleRollDice = () => {
        dispatch(setErrorMessage(''))
        dispatch(rollDice())
        setTimeout(() => {
            dispatch(movePlayer())
        }, 1000)
    }

    return (
        <div>
            <div className={"flex gap-4 justify-center items-center"}>

                <div className={"w-16 h-16 rounded-xl border-2 border-black border-double"}>
                    {dice > 0 ?
                        <img className={"w-full h-full object-contain"} src={diceImages[dice - 1]} alt=""/>
                        :
                        null
                    }

                </div>

                <button
                    onClick={() => handleRollDice()}
                    className={"flex gap-2 justify-center items-center bg-slate-200 px-4 py-2 rounded hover:bg-slate-300"}>
                    <div className={"w-8 h-8"}>
                        <img className={"w-full h-full object-contain"}
                             src="https://www.online-stopwatch.com/images/dice.png" alt=""/>
                    </div>
                    <div>
                        Roll dice
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Dice;
