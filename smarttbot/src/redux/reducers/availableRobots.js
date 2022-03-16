import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'availableRobots',
    initialState: {
        available: 2,
    },
    reducers: {
        setAvailable: (state, action) => {
            state.available = action.payload
        }
    }
})

export const { setAvailable } = slice.actions
export default slice.reducer;