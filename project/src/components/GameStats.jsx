import React from 'react';
import Dice from "./Dice.jsx";
import Money from "./Money.jsx";
import BoughtStreets from "./BoughtStreets.jsx";
import {useSelector} from "react-redux";

const GameStats = () => {

    const error = useSelector((state) => state.game.error)

    return (
        <div className={"absolute inset-0 flex items-center justify-center gap-6"}>
            <div className={"flex flex-col gap-4"}>
                <Dice/>
                <Money/>
                <div className={"h-6 flex justify-center items-center text-red-600"}>
                    <div>{error}</div>
                </div>
            </div>
            <div>
                <BoughtStreets/>
            </div>


        </div>
    );
};

export default GameStats;
