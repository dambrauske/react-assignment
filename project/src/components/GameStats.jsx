import React from 'react';
import Money from "./Money.jsx";
import BoughtStreets from "./BoughtStreets.jsx";
import {useSelector} from "react-redux";

const GameStats = () => {

    const error = useSelector((state) => state.game.error)

    return (

        <div className={"flex items-center justify-center gap-6 md:w-2/6 lg:w-1/6 pe-6"}>
            <div className={"flex flex-col gap-4"}>
                <Money/>
                <div className={"h-6 flex justify-center items-center text-red-600 animate-pulse duration-100"}>
                    <div>{error}</div>
                </div>
                <BoughtStreets/>
            </div>
        </div>

    );
};

export default GameStats;
