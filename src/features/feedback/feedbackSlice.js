import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {BACKAND_URL} from "../../global";

const initialState = {
    feedbackSlides: [],
    isLoading: true,
    error: null,
}

export const fetchFeedbackSlider = createAsyncThunk(
    'feedbackSlider/fetchFeedbackSlider',
    async (language) => {
        const res = await axios(`${BACKAND_URL}/api/feedbacks?locale=${language}&populate=*`)
        return await res.data
    }
)

export const feedbackSlice = createSlice({
    name: 'feedbackSlider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFeedbackSlider.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFeedbackSlider.fulfilled, (state, action) => {
            state.isLoading = false
            state.feedbackSlides = action.payload.data
            console.log(action.payload.data)
        })
        builder.addCase(fetchFeedbackSlider.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default feedbackSlice.reducer