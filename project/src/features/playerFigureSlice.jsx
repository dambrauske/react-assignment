import {createSlice} from "@reduxjs/toolkit";

export const playerFigureSlice = createSlice({
    name: "playerFigure",
    initialState: {
        chosenFigure: ''
    },
    reducers: {
        selectPlayerFigure: (state, action) => {
            state.chosenFigure = action.payload
        }
    }
})

export const {selectPlayerFigure} = playerFigureSlice.actions

export default playerFigureSlice.reducer
