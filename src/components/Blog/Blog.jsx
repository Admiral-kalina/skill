import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchInstagramData} from "../../features/instagramSlice/instagramSlice";

// components
import Footer from "../Footer/Footer";

// styles
import * as styles from "./blog.module.scss"
import axios from "axios";


const Blog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInstagramData())
    }, [])

    const {instagramPosts} = useSelector(state => state.instagram);

    console.log(instagramPosts)

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <div className={styles.container}>
                    {instagramPosts.map(post =>
                        <div key={post.id} className={styles.post}>
                            <img className={styles.postImg} src={post.media_url} alt='postImg'/>
                            <p className={`${styles.postDescription} text36`}>{post.caption}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <Footer withPlanes/>
            </div>
        </div>
    );
};

export default Blog;



// 37144011497
// IGQWRPX3V4M1ctUURENTFIak1SUGtsa2F2d3ZArSG5NTnEwMUpHWDVuZAXpaVl9qUjBVS3hEV1M5aExQVXd1eGpyU0pNeGlFZADZAWUXdKVTdMc0ZAHLUNqNDBDLURMdnRUMjdqNGpjNDBudVMwcHZAVR29YVlJqcXFUOU0ZD