import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {instagramApi} from "../../api";

const initialState = {
    instagramPosts: [],
    isLoading: true,
    error: null,
}

export const fetchInstagramData = createAsyncThunk(
    'instagram/fetchInstagramData',
    async () => {
        console.log('FETCH')
        const res = await instagramApi.get()
        console.log(res)
        return await res.data
    }
)

export const instagramSlice = createSlice({
    name: 'instagram',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInstagramData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchInstagramData.fulfilled, (state, action) => {
            state.isLoading = false
            state.instagramPosts = action.payload.data
        })
        builder.addCase(fetchInstagramData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default instagramSlice.reducer