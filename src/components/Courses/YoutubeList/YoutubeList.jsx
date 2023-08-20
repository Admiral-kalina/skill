import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchYoutube} from "../../../features/youtubeSlice/youtubeSlice";

//styles
import * as styles from "./youtubeList.module.scss";

//assets
import girl from "../../../images/courses/girl.png";
import youTube from "../../../images/home/youtube.png";
import {Link} from "gatsby";


const YoutubeList = ({mainPage}) => {
    const {language} = useSelector(store => store.user.user);
    const {list, isLoading, error} = useSelector(res => res.youTube)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchYoutube(language.toLowerCase()))
    }, [language])

    if (isLoading) {
        return (
            <div>
                ...loading
            </div>
        )
    }
    if (error) {
        console.log(error)
        return (
            <div>
                ...error while loading slider
            </div>
        )
    }

    return (
        <div className={styles.row}>
            {list.map(el =>
                <YoutubeItem mainPage={mainPage} key={el.id} attributes={el.attributes}/>
            )}
        </div>
    );
};

export default YoutubeList;


const YoutubeItem = ({attributes,mainPage}) => {
    const url = attributes.img.data.attributes.url;
    const currentImg = mainPage ? youTube : girl;
    console.log(attributes)
    return (
        <div className={styles.column}>
           <Link to={attributes.link}>
               <div className={styles.imgBlock}>
                   <img className={styles.bigPhoto} src={url} alt="img"/>
                   <img className={mainPage? styles.youTube : styles.girl} src={currentImg} alt="img"/>
               </div>
               <p className={`${styles.title} text36`}>{attributes.title}</p>
               <p className="text24">{attributes.subtitle}</p>
           </Link>
        </div>
    );
};

