import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sellStreet} from "../features/gameSlice.jsx";

const BoughtStreets = () => {

    const streets = useSelector((state) => state.game.bought)

    const dispatch = useDispatch()

    return (
        <div className={"bg-slate-200 p-2 rounded flex flex-col gap-2 h-60 w-48 overflow-y-auto"}>
            <div>Purchased streets:</div>
            {streets && streets.map((street, i) => (
                <div
                    className={"rounded flex justify-between"}
                    style={{backgroundColor: `${street.color}`}}
                    key={i}>
                    <div className={"px-2"}>
                        {street.text}
                    </div>
                    <button
                        onClick={() => dispatch(sellStreet(street))}
                        className={"bg-slate-50 px-2"}>Sell</button>
                </div>
            ))}
        </div>
    );
};

export default BoughtStreets;
