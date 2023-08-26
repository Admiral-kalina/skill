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
        const res = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&&access_token=IGQWRPX0l2c3VHOGExdEpWX1dFQWJubHlSa2FRUWJwSWJhRS1GamF1cjFvbUNCNXNNVUo2SWR6cW93NExRVXVLX1VGNHJjNDNIRU1LM2NoT2hKNkJhMFBhZAXo0aFpma29NUWFMTkFxeUdMT0dENzJHQ3RMVHQ2Q3MZD')

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