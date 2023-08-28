import React from 'react';
import Dice from "./Dice.jsx";
import Money from "./Money.jsx";

const GameStats = () => {
    return (
        <div className={"absolute inset-0 flex items-center justify-center gap-6"}>
            <div className={"flex flex-col gap-4"}>
                <Dice/>
                <Money/>
            </div>


        </div>
    );
};

export default GameStats;
