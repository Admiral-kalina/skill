import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {strapiApi} from "../../api";

const initialState = {
    fundingYoutube: [],
    isLoading: true,
    error: null,
}

export const fetchFundingYoutube = createAsyncThunk(
    'fundingYoutube/fetchFundingYoutube',
    async (language) => {
        const res = await strapiApi.get(`/api/funding-youtube?locale=${language}&populate=*`)
        return await res.data
    }
)

export const fundingYoutubeSlice = createSlice({
    name: 'fundingYoutubeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFundingYoutube.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFundingYoutube.fulfilled, (state, action) => {
            state.isLoading = false
            state.fundingYoutube = action.payload.data
            console.log(action.payload.data)
        })
        builder.addCase(fetchFundingYoutube.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default fundingYoutubeSlice.reducer