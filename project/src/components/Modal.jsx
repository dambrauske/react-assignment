import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setModal, setNewGame} from "../features/gameSlice.jsx";

const Modal = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const startNewGame = () => {
        console.log('play again')
        navigate("/")
        dispatch(setModal(false))
        dispatch(setNewGame())
    }

    return (
        <div className={"relative flex justify-center items-center"}>
            <div className={"fixed top-0 border-2 left-0 right-0 w-full h-full backdrop-blur-sm bg-black bg-opacity-50 z-20"}></div>
            <div className={"bg-slate-100 h-40 w-96 flex justify-center items-center flex-col gap-4 absolute top-20 z-30 rounded"}>
                <div>
                    You have purchased all streets!
                </div>
                <button
                    onClick={() => startNewGame()}
                    className={"bg-white px-4 py-2 rounded w-40 self-center hover:bg-indigo-300 hover:text-white"}>Play again</button>
            </div>
        </div>
    );
};

export default Modal;
