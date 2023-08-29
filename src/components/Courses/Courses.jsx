import React from 'react';

//styles
import * as styles from "./courses.module.scss";

//assets
import first from "../../images/courses/1.png";
import firstRight from "../../images/courses/1_right.png";
import firstLeft from "../../images/courses/1_left.png";
import second from "../../images/courses/2.png";
import secondRight from "../../images/courses/2_right.png";
import secondLeft from "../../images/courses/2_left.png";
import avatar from "../../images/courses/avatar.png";
import {UIButton} from "../UI/Button/UIButton";
import {CoursesList} from "./CoursesList/CoursesList";
import YoutubeList from "./YoutubeList/YoutubeList";
import {useTranslation} from "react-i18next";


export const Courses = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>{t('skills.title')}</h2>
                <p className="text36">{t('skills.box1.text1')}</p>
                <p className="text36">{t('skills.box1.text2')}</p>
                <p className="text36">{t('skills.box1.text3')}</p>
            </div>
            <div className={styles.grey}>
                <div className={`${styles.content} ${styles.documents}`}>
                    <div className={styles.containerSmall}>
                        <p className={`${styles.title} text64`}>{t('skills.box2.text1')}</p>
                        <div className={styles.row}>
                            <img className={styles.imgMain} src={first} alt="img"/>
                            <div className={styles.textBlock}>
                                <p className="text36">{t('skills.box2.text2')}<br/>{t('skills.box1.text3')}</p>
                                <div className={`btnContainer ${styles.buttonContainer}`}>
                                    <UIButton white>{t('skills.btn')}</UIButton>
                                </div>
                            </div>
                            <img src={firstLeft} alt="firstLeft" className={styles.imgLeft}/>
                            <img src={firstRight} alt="firstRight" className={styles.imgRight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.grey}>
                <div className={`${styles.content} ${styles.woman}`}>
                    <div className={styles.containerSmall}>
                        <p className={`${styles.title} text64`}>{t('skills.box3.text1')}</p>
                        <div className={styles.row}>
                            <img className={styles.imgMain} src={second} alt="img"/>
                            <div className={styles.textBlock}>
                                <p className="text36">{t('skills.box3.text2')}</p>
                                <div className={`btnContainer ${styles.buttonContainer}`}>
                                    <UIButton white>{t('skills.btn')}</UIButton>
                                </div>
                            </div>

                            <img src={secondLeft} alt="firstLeft" className={styles.imgLeft}/>
                            <img src={secondRight} alt="firstRight" className={styles.imgRight}/>
                            <div className="buttonContainer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.redRoot}>
                <p className={`${styles.title} text64`}>{t('skills.box4.text1')}</p>
                <div className={styles.red}>
                    <CoursesList/>
                </div>
            </div>
            <div className={styles.youtube}>
                <div className={styles.container}>
                    <h2>{t('skills.box4.text2')}</h2>
                    <p className="text36">{t('skills.box4.text3')}</p>
                    <img src={avatar} alt="avatar"/>
                    <YoutubeList/>
                </div>
            </div>
        </div>
    );
};