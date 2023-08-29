import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {strapiApi} from "../../api";

const initialState = {
   aboutSlides: [],
    isLoading: true,
    error: null,
}

export const fetchAboutSlider = createAsyncThunk(
    'aboutSlider/fetchAboutSlider',
    async (endpoint) => {
        console.log(endpoint)
        const res = await strapiApi.get(`/api/${endpoint}?populate=*`)
        console.log(res)
        return await res.data
    }
)

export const aboutSliderSlice = createSlice({
    name: 'aboutSlider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAboutSlider.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAboutSlider.fulfilled, (state, action) => {
            state.isLoading = false
            state.aboutSlides = action.payload.data.attributes.slider.data
            console.log(action.payload)
        })
        builder.addCase(fetchAboutSlider.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default aboutSliderSlice.reducer