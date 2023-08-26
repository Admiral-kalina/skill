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
        const res = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&&access_token=IGQWRQb09wbjZAOVXVkQ1Rrc3gxc0xHT2RrdDhLT2xCaXVhWUI3WUpfdTRObnhDSV9PdXhzc0NQeGhPV3F5c3c5T2RGWkc3czF1QThJZAzdiYVVVWHRSYnR3S3FRUnZAhZAWVGT1JZAVXdydkNPcmxiVUFTdGdxdlptX28ZD')

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