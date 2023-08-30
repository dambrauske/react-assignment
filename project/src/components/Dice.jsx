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
            <div className={"flex gap-4 justify-center items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"}>

                <div className={"w-16 h-16 rounded-xl border-2 border-black border-double"}>
                    {dice > 0 ?
                        <img className={"w-full h-full object-contain"} src={diceImages[dice - 1]} alt=""/>
                        :
                        null
                    }

                </div>

                <button
                    onClick={() => handleRollDice()}
                    className={"bg-slate-200 flex justify-center items-center gap-2 py-2 rounded w-36 hover:bg-indigo-300 hover:text-white"}>
                    <div className={"h-8"}>
                        <img className={"w-full h-full object-contain"}
                             src="https://www.online-stopwatch.com/images/dice.png" alt=""/>
                    </div>
                    <div>
                        Roll dice
                    </div>
                </button>
            </div>
    );
};

export default Dice;
