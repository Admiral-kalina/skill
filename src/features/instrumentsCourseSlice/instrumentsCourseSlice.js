import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {instagramApi, strapiApi} from "../../api";


const initialState = {
    instrumentPost: [],
    isLoading: true,
    error: null,
}

export const fetchInstrumentCource = createAsyncThunk(
    'instrument/fetchInstrumentCource',
    async (language) => {
        const res = await strapiApi.get(`/api/instrument-course?locale=${language}&populate=*`)
        return await res.data
    }
)

export const instrumentCourseSlice = createSlice({
    name: 'instrumentCourse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInstrumentCource.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchInstrumentCource.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.instrumentPost = action.payload.data
        })
        builder.addCase(fetchInstrumentCource.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default instrumentCourseSlice.reducer