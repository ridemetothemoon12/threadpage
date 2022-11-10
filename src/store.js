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

let listItems = createSlice({
    name: "ItemsData",
    initialState: {title: "", id: 0},
    reducers: {
        ChangeListTitles(state, action) {
            state.title = action.payload
        },
        ChangeListId(state, action) {
            state.id = action.payload
        }
    }
})

export let {ChangeListTitles, ChangeListId} = listItems.actions
export let {ChangeListIndex} = listIndex.actions

export default configureStore({
    reducer: {
        listIndex: listIndex.reducer,
        listItems: listItems.reducer
    }
})