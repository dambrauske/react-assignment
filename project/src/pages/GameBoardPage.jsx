import React from 'react';
import {board} from "../gameBoard.jsx"
import Cell from "../components/Cell.jsx";
import {useSelector} from "react-redux";
import GameStats from "../components/GameStats.jsx";



const GameBoardPage = () => {

    const testBoard = useSelector((state) => state.gameBoard.gameBoard)
    console.log(testBoard)


    return (
        <div className={"bg-slate-50 h-screen grid grid-cols-6 gap-1 p-4 relative"}>
            {board.map((cell, i) => (
                <Cell
                    cell={cell}
                    key={i}>
                </Cell>
            ))}
            <GameStats/>
        </div>
    );
};

export default GameBoardPage;
