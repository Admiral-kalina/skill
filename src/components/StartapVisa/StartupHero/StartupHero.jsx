import React from 'react';

//components
import {UIButton} from "../../UI/Button/UIButton";

//styles
import * as styles from "./startupHero.module.scss";

//assets
import library from "../../../images/startupVisa/library.png"
import conversation from "../../../images/startupVisa/conversation.png"
import girlTop from "../../../images/startupVisa/girlTop.png"
import girlBottom from "../../../images/startupVisa/girlBottom.png"
import planet from "../../../images/startupVisa/planet.png"
import calendar from "../../../images/startupVisa/calendar.png"
import {useTranslation} from "react-i18next";


export const StartupHero = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>{t('startup.title')}</h2>
                <p className={`text36 ${styles}`}>{t('startup.subtitle')}</p>
                <img className={styles.girl} src={girlTop} alt="img"/>
            </div>
            <div className={`${styles.leftZeroBlock} ${styles.orange}`}>
                <div className={styles.containerBig}>
                    <p className="text36">{t('startup.box1.text1')}</p>
                    <p className="text36">{t('startup.box1.text2')}</p>
                    <p className="text36">{t('startup.box1.text3')}</p>
                </div>
            </div>
            <div className={styles.container}>
                <p className={`text40 ${styles.text40}`}>{t('startup.box2.text1')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text2')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text3')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text4')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text5')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text6')}</p>
                <p className={`text36 ${styles.text36}`}>{t('startup.box2.text7')}</p>
            </div>
            <div className={styles.leftZeroBlock}>
                <div className={styles.containerBig}>
                    <div className={`${styles.row} ${styles.library}`}>
                        <img src={library} alt="library"/>
                        <div>
                            <p className={`text36 ${styles.text36}`}>{t('startup.box2.text1')}</p>
                            <p className={`text36 ${styles.text36}`}>{t('startup.box2.text2')}</p>
                            <p className={`text36 ${styles.text36}`}>{t('startup.box2.text3')}</p>
                            <p className={`text36 ${styles.text36}`}>{t('startup.box2.text4')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.planetBlock}>
                <div className={styles.container}>
                    <p className="text36">{t('startup.box3.text5')}</p>
                    <p className="text36">{t('startup.box3.text6')} <a href="https://forms.gle/ZmStFjPbZSeE1j4J6">https://forms.gle/ZmStFjPbZSeE1j4J6</a></p>
                    <div className={`btnContainer ${styles.btnContainer}`}>
                        <UIButton blueLight>{t('startup.box3.btn1')}</UIButton>
                    </div>
                    <img src={planet} alt="img"/>
                </div>
            </div>
            <div className={styles.container}>
                <p className="text64">{t('startup.box4.title')}</p>
            </div>
            <div className={styles.leftZeroBlock}>
                <div className={styles.containerBig}>
                    <div className={`${styles.row} ${styles.conversation}`}>
                        <img src={conversation} alt="img"/>
                        <div>
                            <p className="text36">{t('startup.box4.text1')}</p>
                            <p className="text36">{t('startup.box4.text2')}</p>
                            <p className="text36">{t('startup.box4.text3')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <p className="text36">{t('startup.box5.text1')}</p>
                <p className="text36">{t('startup.box5.text2')}</p>
                <p className="text36">{t('startup.box5.text3')}</p>
            </div>
            <div className={`${styles.leftZeroBlock} ${styles.red}`}>
                <div className={styles.containerBig}>
                    <img src={calendar} alt="calendar"/>
                    <p className="text36">{t('startup.box6.title')}</p>
                    <p className="text36">{t('startup.box6.text1')}</p>
                    <p className="text36">{t('startup.box6.text2')}</p>
                    <p className="text36">{t('startup.box6.text3')}</p>
                    <p className="text36">{t('startup.box6.text4')}</p>
                    <p className="text36">{t('startup.box6.text5')}</p>
                    <p className="text36">{t('startup.box6.text6')}</p>
                </div>
            </div>
            <div className={styles.container}>
                <p className="text36">{t('startup.box7.text1')}</p>
                <p className="text36">{t('startup.box7.text2')}</p>
            </div>
            <div className={styles.full}>
                <div className={styles.gray}>
                    <div className={styles.container}>
                        <p className="text64">{t('startup.box7.text3')}</p>
                        <p className="text36">{t('startup.box7.text4')}</p>
                        <p className="text36">{t('startup.box7.text5')}</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.girlBottom}`}>
                    <div className={styles.darkGray}>
                        <p className="text36">{t('startup.box7.text6')}</p>
                        <p className="text36">{t('startup.box7.text7')}</p>
                        <p className="text36">{t('startup.box7.text8')}</p>
                    </div>
                </div>
                <img src={girlBottom} alt="img"/>
            </div>

        </div>
    );
};

