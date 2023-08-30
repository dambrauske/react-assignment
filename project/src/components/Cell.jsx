import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addStreetToBought, payMoney, setErrorMessage, setModal} from "../features/gameSlice.jsx";

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

            if (boughtStreets.length === 16) {
                dispatch(setModal(true))
            }

        } else {
            dispatch(setErrorMessage('Not enough money'))
        }
    }

    return (
        <div className={"flex flex-col justify-center relative"}>
            {cell.number !== 0 ?
                <div
                    className={`flex flex-col ${cell.text === "START" ? "justify-center" : "justify-between"} items-center h-full bg-slate-200`}>
                    {cell.text !== "START" ?
                        <div>
                            {cell.text}
                        </div>
                        :
                        <div className={"text-red-500 font-bold text-2xl flex justify-center items-center gap-2"}>
                            <div>
                                {cell.text}
                            </div>
                            <i className="fas fa-arrow-right"></i>

                        </div>
                    }
                    {cell.number !== 1 && cell.text !== "START" &&
                        <div className={"mt-6"}> {cell.price} $</div>
                    }

                    {cell.number === playerPosition &&
                        <div
                            className={"w-7 h-7 bg-yellow-200 border-2 border-black rounded-full absolute top-1/4 right-1/2 transform translate-x-1/2 "}>
                            <img className={"w-full h-full object-cover"} src={playerFigure} alt=""/>
                        </div>
                    }

                    {boughtStreets.some((boughtCell) => boughtCell.number === cell.number) && (
                        <div className={"h-6 absolute bottom-0 right-1/2 transform translate-x-1/2"}>
                            <img className={"w-full object-cover h-full"}
                                 src="https://www.monopolylifesized.com/app/dist/img/827fb3f5589254d9f7e160637a94f345.png"
                                 alt=""/>
                        </div>
                    )}

                    {cell.text !== "START" &&

                        <div className={"h-6 w-full flex justify-center"} style={{backgroundColor: `${cell.color}`}}>


                            {cell.number === playerPosition && cell.text !== "START" && !boughtStreets.some((boughtCell) => boughtCell.number === cell.number) ?
                                <button
                                    onClick={() => handleBuy(cell, cell.price)}
                                    className={"bg-slate-50 px-2 hover:bg-slate-200 cursor-pointer z-10"}>Buy</button>
                                :
                                null
                            }
                        </div>
                    }
                </div>

                :
                null
            }
        </div>
    );
};

export default Cell;
