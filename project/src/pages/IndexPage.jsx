import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPlayerFigure, setNewGame} from "../features/gameSlice.jsx";
import {useNavigate} from "react-router-dom";

const IndexPage = () => {

    const playerFigures = [
        'https://www.wftv.com/resizer/-OZfgpzFgyFmbkPnzqpzN0r6DNM=/arc-anglerfish-arc2-prod-cmg/public/42ZC2X3EUNDDLMGDKN3USAWUVY.png',
        'https://fox8.com/wp-content/uploads/sites/12/2022/04/Thimble.png',
        'https://fox8.com/wp-content/uploads/sites/12/2022/04/Hat.png?w=1500',
        'https://www.geekslop.com/wp-content/uploads/2022/04/Scotty.png',
        'https://fox8.com/wp-content/uploads/sites/12/2022/04/BattleShip-Copy.png',
    ]

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const playerFigure = useSelector((state) => state.game.chosenFigure)
    const [errorMessage, setErrorMessage] = useState("")

    const startGame = () => {
        if (playerFigure) {
            setErrorMessage('')
            dispatch(setNewGame())
            navigate("/gameBoard")
        } else {
            setErrorMessage('Please select player figure')
        }

    }

    return (
        <div className={"flex justify-center items-center h-screen bg-slate-50"}>
            <div className={"flex flex-col gap-4 items-center"}>
                <div className={"flex flex-col gap-6 items-center"}>
                    <div>Choose player figure</div>
                    <div className={"flex gap-6 justify-center items-center"}>
                        {playerFigures.map((figure, i) => (
                                <div
                                    onClick={() => dispatch(selectPlayerFigure(figure))}
                                    key={i}
                                    className={`w-16 h-16 border-2 border-black rounded-md cursor-pointer hover:bg-green-200 ${playerFigure === figure ? `bg-green-200` : `bg-yellow-200`}`}>
                                    <img className={"w-full h-full object-cover"} src={figure} alt=""/>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className={"h-8 text-red-600"}>
                    <div>{errorMessage}</div>
                </div>
                <button
                    onClick={startGame}
                    className={"bg-sky-300 border-2 border-black rounded-md w-40 py-2"}>
                    Start game
                </button>
            </div>
        </div>
    );
};

export default IndexPage;
