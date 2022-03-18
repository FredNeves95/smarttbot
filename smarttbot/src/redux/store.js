import { configureStore } from "@reduxjs/toolkit";
import availableRobots from "./reducers/availableRobots";
import modalReducer from "./reducers/modalReducer";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        availableRobots: availableRobots
    }
})

