import {configureStore} from "@reduxjs/toolkit";
import playerFigureSliceReducer from "./features/playerFigureSlice.jsx";

export default configureStore({
    reducer: {
        playerFigure: playerFigureSliceReducer
    }
})
