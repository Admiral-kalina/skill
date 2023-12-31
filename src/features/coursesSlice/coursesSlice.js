import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {strapiApi} from "../../api";


const initialState = {
    courses: [],
    isLoading: true,
    error: null,
}

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async (language) => {
        console.log(language)
        const res = await strapiApi.get(`/api/course-lists?locale=${language}&populate=*`)
        return await res.data
    }
)

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.isLoading = false
            state.courses = action.payload.data
        })
        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default coursesSlice.reducer