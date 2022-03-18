import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'modal',
    initialState: {
        show: false,
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { setShow } = slice.actions
export default slice.reducer;