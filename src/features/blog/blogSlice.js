import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: true,
    error: null,
}

export const fetchBlog = createAsyncThunk(
    'blog/fetchBlog',
    async () => {
        const res = await axios('http://localhost:1337/api/blogs?locale=en')
        return await res.data
    }
)

export const contentSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default contentSlice.reducer