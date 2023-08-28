import {createSlice} from "@reduxjs/toolkit";

const figure = localStorage.getItem("figure");
const playerPosition = localStorage.getItem("playerPosition");


export const playerFigureSlice = createSlice({
    name: "playerFigure",
    initialState: {
    chosenFigure: figure ? JSON.parse(figure) : '',
        playerAt: playerPosition ? JSON.parse(playerPosition) : 1
    },
    reducers: {
        selectPlayerFigure: (state, action) => {
            state.chosenFigure = action.payload
            localStorage.setItem('figure', JSON.stringify(state.chosenFigure))
        }
    }
})

export const {selectPlayerFigure} = playerFigureSlice.actions

export default playerFigureSlice.reducer
