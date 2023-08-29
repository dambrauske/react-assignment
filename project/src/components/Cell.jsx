import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addStreetToBought, payMoney, setErrorMessage} from "../features/gameSlice.jsx";

const Cell = ({cell}) => {

    const playerPosition = useSelector((state) => state.game.playerPosition)
    const playerFigure = useSelector((state) => state.game.chosenFigure)
    const boughtStreets = useSelector((state) => state.game.bought)
    const playerMoney = useSelector((state) => state.game.money)
    const dispatch = useDispatch()

    const handleBuy = (cell, price) => {
        if (playerMoney >= price) {
            dispatch(addStreetToBought(cell))
            dispatch(payMoney(price))
        } else {
            dispatch(setErrorMessage('Not enough money'))
        }
    }


    return (
        <div className={"flex flex-col justify-center"}>
            {cell.number !== 0 ?
                <div className={"flex flex-col justify-between items-center h-full bg-slate-200 relative"}>
                    <div>
                        {cell.text}
                    </div>

                    {cell.number !== 1 &&
                        <div> {cell.price} $</div>
                    }

                    {cell.number === playerPosition &&
                        <div
                            className={"w-8 h-8 bg-yellow-200 border-2 border-black rounded-full absolute top-0 right-5"}>
                            <img className={"w-full h-full object-cover"} src={playerFigure} alt=""/>
                        </div>
                    }

                    {boughtStreets.some((boughtCell) => boughtCell.number === cell.number) && (
                        <div className={"w-12 h-6 rounded-xl absolute top-0 left-0 bg-white border-black text-xs flex justify-center items-center border-2"}>
                            bought
                        </div>
                    )}

                    <div className={"h-6 w-full flex justify-center"} style={{backgroundColor: `${cell.color}`}}>

                        {cell.number === playerPosition && cell.text !== "START" && !boughtStreets.some((boughtCell) => boughtCell.number === cell.number) ?
                            <button
                                onClick={() => handleBuy(cell, cell.price)}
                                className={"bg-slate-50 px-2 hover:bg-slate-200 cursor-pointer z-10"}>Buy</button>
                            :
                            null
                        }
                    </div>
                </div>

                :
                null
            }
        </div>
    );
};

export default Cell;
