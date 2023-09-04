import { configureStore } from '@reduxjs/toolkit'

import blogSlice from "../features/blog/blogSlice";
import aboutSliderSlice from "../features/aboutSlider/aboutSliderSlice";
import youtubeSlice from "../features/youtubeSlice/youtubeSlice";
import coursesSlice from "../features/coursesSlice/coursesSlice";
import userSlice from "../features/userSlice/userSlice";
import feedbackSlice from "../features/feedback/feedbackSlice";
import instagramSlice from "../features/instagramSlice/instagramSlice";
import fundingYoutubeSlice from "../features/fundingYoutubeSlice/fundingYoutubeSlice";
import instrumentCourseSlice from "../features/instrumentsCourseSlice/instrumentsCourseSlice";
import linksSlice from "../features/linkSlice/linkSlice";


export const store = configureStore({
    reducer: {
        blog: blogSlice,
        aboutSlider:aboutSliderSlice,
        youTube: youtubeSlice,
        courses: coursesSlice,
        user: userSlice,
        feedback:feedbackSlice,
        instagram:instagramSlice,
        fundingYoutube:fundingYoutubeSlice,
        instrumentCourse:instrumentCourseSlice,
        links: linksSlice,
    },
})