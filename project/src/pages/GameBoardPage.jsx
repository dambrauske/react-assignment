import React from 'react';
import {board} from "../gameBoard.jsx"
import Cell from "../components/Cell.jsx";


const GameBoardPage = () => {
    return (
        <div className={"bg-slate-50 h-screen grid grid-cols-6 gap-2 p-4"}>
            {board.map((cell, i) => (
                <Cell
                    cell={cell}
                    key={i}>
                </Cell>
            ))}
        </div>
    );
};

export default GameBoardPage;
