import React from 'react';
import {board} from "../gameBoard.jsx"
import Cell from "../components/Cell.jsx";
import GameStats from "../components/GameStats.jsx";
import Modal from "../components/Modal.jsx";
import {useSelector} from "react-redux";
import Dice from "../components/Dice.jsx";

const GameBoardPage = () => {

    const modalState = useSelector((state) => state.game.modal)

    return (
        <div>
            {modalState && <Modal/>}
            <div className="flex gap-4">
                <div className="h-screen grid grid-cols-6 gap-1 w-5/6 relative p-2">

                {board.map((cell, i) => (
                        <Cell
                            cell={cell}
                            key={i}>
                        </Cell>
                    ))}
                    <Dice/>

                </div>
                <GameStats/>
            </div>
        </div>
    );
};

export default GameBoardPage;
