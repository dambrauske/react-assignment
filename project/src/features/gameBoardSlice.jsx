import {createSlice} from "@reduxjs/toolkit";
import {board} from "../gameBoard.jsx";


export const boardSlice = createSlice({
    name: "gameBoard",
    initialState: {
        gameBoard: board,
    },
    reducers: {
        // addPlayerFigure: (state, action) => {
        //     state.gameBoard = action.payload
        // }
    }
})



export default boardSlice.reducer
