import React from 'react';
import {useSelector} from "react-redux";

const Money = () => {

    const money = useSelector((state) => state.player.money)

    return (
        <div className={"bg-slate-200 py-2 px-4"}>
            <div>Money: {money} $</div>
        </div>
    );
};

export default Money;
