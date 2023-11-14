import React from 'react';
import {useSelector} from "react-redux";
const Money = () => {
    const money = useSelector((state) => state.game.money)

    return (
        <div className="bg-yellow-200 rounded flex justify-center items-center gap-1 py-2 w-48">
            <div className="w-8">
                <img src="https://clipart-library.com/images_k/cash-icon-transparent/cash-icon-transparent-4.png" alt=""/>
            </div>
            <div>Money: {money} $</div>
        </div>
    );
};

export default Money;
