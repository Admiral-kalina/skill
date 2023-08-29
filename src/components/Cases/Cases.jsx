import React from 'react';

// styles
import * as styles from "./cases.module.scss"

// assets
import case1 from "../../images/cases/case1.png";
import case2 from "../../images/cases/case2.png";
import case3 from "../../images/cases/case3.png";
import girlTop from "../../images/cases/girlTop.png";
import girlMiddle from "../../images/cases/girlMiddle.png";
import {SwiperComponent} from "../SwiperComponent/SwiperComponent";
import {useTranslation} from "react-i18next";

const Cases = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h2>{t('cases.title')}</h2>
                    <div className={styles.case}>
                        <p className={`${styles.title} text36`}>{t('cases.case.text1')}</p>
                        <p className={`${styles.subtitle} text36`}></p>
                        <p className="text36">{t('cases.case.text2')}</p>
                        <p className="text36">{t('cases.case.text3')}</p>
                        <p className="text36">{t('cases.case.text4')}</p>
                        <p className="text36">{t('cases.case.text5')}</p>
                        <p className="text36">{t('cases.case.text6')}</p>
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.columnLeft}`}>
                                <p className="text36">{t('cases.box1.text1')}</p>
                                <p className="text36">{t('cases.box1.text2')}</p>
                                <p className="text36">{t('cases.box1.text3')}</p>
                                <p className="text36">{t('cases.box1.text4')}</p>
                                <p className="text36">{t('cases.box1.text5')}</p>
                                <p className="text36">{t('cases.box1.text6')}</p>
                            </div>
                            <div className={`${styles.column} ${styles.columnRight}`}>
                                <img src={case1} alt="img"/>
                                <div className={`${styles.comforterBlock} textComforter`}>
                                    <p className="">{t('cases.textComf1')}</p>
                                    <p className="">{t('cases.textComf2')}</p>
                                    <p className="">{t('cases.textComf3')}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text36">
                            {t('cases.box2.text1')}
                            <a href="https://t.me/skilltostart">@skilltostart</a> 
                            {t('cases.box2.text2')}
                            <a href="https://youtu.be/V1_oVTiDcb0"> https://youtu.be/V1_oVTiDcb0</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.caseSecond}>
                    <div className={styles.orange}>
                        <p className="text36">{t('cases.box3.text1')}</p>
                    </div>
                    <div className={styles.gray}>
                        <p className={`${styles.title} text36`}>{t('cases.box3.text2')}</p>
                        <p className={`${styles.subtitle} text36`}>{t('cases.box3.text3')}</p>
                        <p className="text36">{t('cases.box3.text4')}</p>
                        <p className="text36">{t('cases.box3.text5')}</p>
                        <p className="text36">{t('cases.box3.text6')} <br/> {t('cases.box3.text7')}</p>
                    </div>

                </div>
            </div>
            <div className={styles.caseThird}>
                <div className={styles.container}>
                    <img className={styles.caseImg} src={case2} alt="img"/>
                    <div className={`${styles.orange} ${styles.orangeSecond}`}>
                        <p className="text36">{t('cases.box4.text1')} <br/> {t('cases.box4.text2')} <a
                            href="https://t.me/skilltostart">@skilltostart</a> {t('cases.box4.text3')} <a
                            href="https://youtu.be/V1_oVTiDcb0">https://youtu.be/V1_oVTiDcb0</a> {t('cases.box4.text4')}</p>
                    </div>

                    <p className={`${styles.title} text36`}>{t('cases.box4.text5')}</p>
                    <p className={`${styles.subtitle} text36`}>{t('cases.box4.text6')} <br/> {t('cases.box4.text7')}</p>
                    <p className="text36">{t('cases.box4.text8')}</p>
                    <p className="text36">{t('cases.box4.text9')}</p>
                    <div className={styles.row}>
                        <div className={styles.recall}>
                            <p className="text36">{t('cases.box4.text10')}</p>
                            <p className="text36">{t('cases.box4.text11')}</p>
                        </div>
                        <img src={case3} alt="img"/>
                    </div>
                </div>
                <div className={styles.slider}>
                    <SwiperComponent endpoint={'cases-slider'}/>
                </div>
            </div>
        </div>
    );
};

export default Cases;