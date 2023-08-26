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
        const res = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&&access_token=IGQWRQQl9TNGhYQVVtdWRGdXlBcnZAqdXNBNU5lbHNxMXN1ZAmwwMnRnUmNyMC0wS1FxOUNld3NfNTIwai0ybnB6QmdhNTZAsYTJraWFNaktVUHN1MFBwM3NkM3BibmRYbVhMMTY5X0I3bmVvcF9vMDNUWlJwUVl4RUEZD')
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