import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {instagramApi} from "../../api";
import axios from "axios";

const initialState = {
    instagramPosts: [],
    isLoading: true,
    error: null,
}

export const fetchInstagramData = createAsyncThunk(
    'instagram/fetchInstagramData',
    async () => {
        console.log('FETCH')
        const res = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&&access_token=IGQWRQWFFXQVc0ZA1lWeGZANSXoyaUFWVU5PSmd0U0J3Nlcwb2Y5OUh3em1IVlluVWoyTEdfSG5CekY5c2RmMTh1OVE2Yng3YlA2cGxfdWp3NV95aU03SWVLR29kaHV6NkhvbTJzYWNLRWd5dzhNMFJwb2NNdGRQeG8ZD')
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