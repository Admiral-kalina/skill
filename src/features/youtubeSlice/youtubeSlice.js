import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    list: [],
    isLoading: true,
    error: null,
}

export const fetchYoutube = createAsyncThunk(
    'youtube/fetchAboutSlider',
    async (language) => {
        const res = await axios(`${BACKAND_URL}/api/youtube-chanels?locale=${language}&populate=*`)
        return await res.data
    }
)

export const aboutSliderSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchYoutube.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchYoutube.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = action.payload.data
        })
        builder.addCase(fetchYoutube.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default aboutSliderSlice.reducer