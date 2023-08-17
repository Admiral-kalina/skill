import {createSlice} from '@reduxjs/toolkit'

const languageFromStorage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'RU' : 'RU';
const coursesFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('coursesList')) || [] : [];

const initialState = {
    user:{
        language: languageFromStorage,
        coursesList: [...coursesFromStorage]
    }
}

export const userSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeUserLanguage(state, action){
            state.user.language = action.payload
            localStorage.setItem('language', action.payload)
        },
        addUserCurse(state, action){
            state.user.coursesList = [...state.user.coursesList, action.payload]
            localStorage.setItem('coursesList', JSON.stringify([...state.user.coursesList]))
        },
        removeUserCurse(state){
            state.user.coursesList = []
            localStorage.setItem('coursesList', JSON.stringify([]))
        }
    },
})

export const {changeUserLanguage,addUserCurse,removeUserCurse} = userSlice.actions
export default userSlice.reducer