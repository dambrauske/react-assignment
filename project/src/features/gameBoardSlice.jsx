import {createSlice} from "@reduxjs/toolkit";
import {board} from "../gameBoard.jsx";


export const boardSlice = createSlice({
    name: "gameBoard",
    initialState: {
        gameBoard: board,
        dice: ''
    },
    reducers: {
        rollDice: (state) => {
            state.dice = Math.floor(Math.random() * 6) + 1
        }

    }
})


export const {rollDice} = boardSlice.actions

export default boardSlice.reducer
