import {configureStore} from "@reduxjs/toolkit";
import gameSliceReducer from "./features/gameSlice.jsx";

export default configureStore({
    reducer: {
        game: gameSliceReducer,
    }
})
