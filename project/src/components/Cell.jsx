import React from 'react';
import {useSelector} from "react-redux";
import {playerSlice, selectPlayerFigure} from "../features/playerSlice.jsx";

const Cell = ({cell}) => {

    const playerAt = useSelector((state) => state.player.playerAt)
    const playerFigure = useSelector((state) => state.player.chosenFigure)

    return (
        <div className={"flex flex-col justify-center "}>
            {cell.number !== 0 ?
                <div className={"flex flex-col justify-between items-center h-full bg-slate-200 relative"}>
                    <div>
                        {cell.text}
                    </div>

                    {cell.text !== "START" &&
                    <div> {cell.price} $</div>
                    }

                    {
                        cell.number === playerAt &&
                        <div className={"w-10 h-10 bg-yellow-200 border-2 border-black rounded-full absolute bottom-2"}>
                            <img className={"w-full h-full object-cover"} src={playerFigure} alt=""/>
                        </div>
                    }

                    <div className={"h-6 w-full"} style={{backgroundColor: `${cell.color}`}}></div>
                </div> :
                null
            }
        </div>
    );
};

export default Cell;
