import React, {useEffect} from 'react';

// styles
import * as styles from "./funding.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchFundingYoutube} from "../../features/fundingYoutubeSlice/fundingYoutubeSlice";
import {Link} from "gatsby";
import conversation from "../../images/funding/conversation.png";
import girl from "../../images/funding/girl.png";
import vector from "../../images/funding/vector.svg";
import {useTranslation} from "react-i18next";


const FundingYoutube = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch()
    const {language} = useSelector(store => store.user.user);


    useEffect(() => {
        dispatch(fetchFundingYoutube(language.toLowerCase()))
    }, [language])

    const {fundingYoutube, isLoading, error} = useSelector(res => res.fundingYoutube)

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

    const youtubePost = fundingYoutube.attributes;
    return (
        <div>
            <div className={styles.book}>
                <div className={styles.container}>
                    <div className={styles.bookContent}>
                        <p className={`${styles.bookTitle} text36`}>{youtubePost.title}</p>
                        <Link to={youtubePost.link}>
                            <img className={styles.mainImg} src={conversation} alt="img"/>
                        </Link>
                        <img className={styles.girl} src={girl} alt="img"/>
                        <img className={styles.vector} src={vector} alt="vector"/>
                        <p className={`${styles.comforterText} textComf`}>{t('funding.box2.conduit')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundingYoutube;