import {configureStore} from "@reduxjs/toolkit";
import playerFigureSliceReducer from "./features/playerFigureSlice.jsx";
import boardSliceReducer from "./features/gameBoardSlice.jsx";

export default configureStore({
    reducer: {
        playerFigure: playerFigureSliceReducer,
        gameBoard: boardSliceReducer,
    }
})
