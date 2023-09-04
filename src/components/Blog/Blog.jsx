import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchInstagramData} from "../../features/instagramSlice/instagramSlice";

// components
import Footer from "../Footer/Footer";

// styles
import * as styles from "./blog.module.scss"
import axios from "axios";
import Loader from "../UI/Loader/Loader";


const Blog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInstagramData())
    }, [])

    const {instagramPosts, isLoading, error} = useSelector(state => state.instagram);

    if (isLoading) {
        return (
            <div>
                <Loader local={false}/>
            </div>
        )
    }
    if (error) {

        return (
            <div>
                ...error while loading instagram posts
            </div>
        )
    }


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



