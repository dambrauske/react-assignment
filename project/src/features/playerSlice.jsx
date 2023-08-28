import {createSlice} from "@reduxjs/toolkit";

const figure = localStorage.getItem("figure");
const playerPosition = localStorage.getItem("playerPosition");


export const playerSlice = createSlice({
    name: "player",
    initialState: {
    chosenFigure: figure ? JSON.parse(figure) : '',
        playerAt: playerPosition ? JSON.parse(playerPosition) : 1,
        money: 200,
    },
    reducers: {
        selectPlayerFigure: (state, action) => {
            state.chosenFigure = action.payload
            localStorage.setItem('figure', JSON.stringify(state.chosenFigure))
        }
    }
})

export const {selectPlayerFigure} = playerSlice.actions

export default playerSlice.reducer
