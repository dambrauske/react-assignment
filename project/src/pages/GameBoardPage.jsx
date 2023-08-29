import React from 'react';
import {board} from "../gameBoard.jsx"
import Cell from "../components/Cell.jsx";
import GameStats from "../components/GameStats.jsx";

const GameBoardPage = () => {

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
