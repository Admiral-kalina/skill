import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {strapiApi} from "../../api";


const initialState = {
    links: [],
    isLoading: true,
    error: null,
}

export const fetchLinks = createAsyncThunk(
    'links/fetchLinks',
    async () => {
        const obj = {};


        await strapiApi.get(`/api/link-1`).then(res => obj.first = res.data.data.attributes.link)
        await strapiApi.get(`/api/link-2`).then(res => obj.second = res.data.data.attributes.link)
        await strapiApi.get(`/api/link-3`).then(res => obj.third = res.data.data.attributes.link)
        await strapiApi.get(`/api/link-4`).then(res => obj.fourth = res.data.data.attributes.link)

        return obj
    }
)

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLinks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchLinks.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.links = action.payload
        })
        builder.addCase(fetchLinks.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default linksSlice.reducer