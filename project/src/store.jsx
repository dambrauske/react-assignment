import {configureStore} from "@reduxjs/toolkit";
import playerSliceReducer  from "./features/playerSlice.jsx";
import boardSliceReducer from "./features/gameBoardSlice.jsx";

export default configureStore({
    reducer: {
        player: playerSliceReducer,
        gameBoard: boardSliceReducer,
    }
})
