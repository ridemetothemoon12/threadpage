import { configureStore, createSlice } from "@reduxjs/toolkit";

let listIndex = createSlice({
    name: "listData",
    initialState: {data: 0},
    reducers: {
        ChangeListIndex(state, action){
            state.data = action.payload
        }
    }
})

export let {ChangeListIndex} = listIndex.actions

export default configureStore({
    reducer: {
        listIndex: listIndex.reducer
    }
})