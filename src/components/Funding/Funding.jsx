import React, {useEffect} from 'react';

//styles
import * as styles from "./funding.module.scss"
import {UIButton} from "../UI/Button/UIButton";

//assets
import conversation from "../../images/funding/conversation.png"
import girl from "../../images/funding/girl.png"
import vector from "../../images/funding/vector.svg"
import {useTranslation} from "react-i18next";
import {Link} from "gatsby";
import {useDispatch, useSelector} from "react-redux";
import {fetchFeedbackSlider} from "../../features/feedback/feedbackSlice";
import {fetchFundingYoutube} from "../../features/fundingYoutubeSlice/fundingYoutubeSlice";
import FundingYoutube from "./FundingYoutube";

export const Funding = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>{t('funding.box1.text1')}</h2>
            </div>
            <div className={`${styles.container} ${styles.textBlock}`}>
                <p className="text36">{t('funding.box1.text2')}</p>
                <p className="text36">{t('funding.box1.text3')} <a href='#'
                                                                   className={styles.link}>{t('funding.box1.text4')}</a>
                </p>
                <p className={`${styles.subtitle} text36`}><span>{t('funding.box2.text1')}</span></p>
            </div>
            <div className={`${styles.bgImage}`}>
                <div className={styles.content}>
                    <div className={`${styles.container}`}>
                        <div className={`${styles.lightGray}`}>
                            <p className="text36">
                                <span>{t('funding.box2.text2.span1')}</span> {t('funding.box2.text2.text1')}</p>
                        </div>
                    </div>
                    <div className={`${styles.blue}`}>
                        <div className={styles.container}>
                            <div className={styles.textBlockFull}>
                                <p className="text36">
                                    <span>{t('funding.box2.text3.span1')}</span> {t('funding.box2.text3.text1')}<br/> {t('funding.box2.text3.text1')}
                                </p>
                                <p className="text36">{t('funding.box2.text4.text1')}
                                    <span>{t('funding.box2.text4.span1')}</span>{t('funding.box2.text4.text2')} </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.container}>
                            <div className={styles.darkGray}>
                                <p className="text36">
                                    <span>{t('funding.box2.text5.span1')}</span> {t('funding.box2.text5.text1')}</p>
                                <p className="text36">{t('funding.box2.text6.text1')}
                                    <span>{t('funding.box2.text6.text1')}</span> {t('funding.box2.text6.text2')}<br/> {t('funding.box2.text6.text3')}
                                </p>
                                <div className={styles.btns}>
                                    <div className={`${styles.btnContainer} btnContainer`}>
                                        <Link to={'/'}>
                                            <UIButton blueLight>{t('funding.box2.btn1')}</UIButton>
                                        </Link>
                                    </div>
                                    <div className={`${styles.whiteBtn} ${styles.btnContainer} btnContainer`}>
                                       <Link to={'/'}>
                                           <UIButton white>{t('funding.box2.btn2')}</UIButton>
                                       </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           <FundingYoutube/>
        </div>
    );
};
