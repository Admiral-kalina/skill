import React from "react";
//styles
import * as styles from "./results.module.scss";
//images
import circlebg from '../../../../images/home/circleBg.png'
import startnow from '../../../../images/home/startNow.svg'
import startvector from '../../../../images/home/startVector.svg'
import {UIButton} from "../../../UI/Button/UIButton";
import {useTranslation} from "react-i18next";

const Results = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <h3>{t('home.block4.title')}</h3>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.columnFirst}`}>
                    <div className={`${styles.circle} ${styles.circleFirst}`}>
                        <p className={styles.title}>
                            {t('home.block4.box1.text1')}
                        </p>
                        <p className={styles.text}>
                            {t('home.block4.box1.text2')}
                        </p>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.columnSecond}`}>
                    <div className={styles.circle}>
                        <p className={styles.title}>
                            {t('home.block4.box2.text1')}
                        </p>
                        <p className={styles.text}>
                            {t('home.block4.box1.text2')}
                        </p>
                    </div>
                </div>
                <div className={`${styles.column}  ${styles.columnThird}`}>
                    <div className={styles.circle}>
                        <p className={styles.title}>
                            {t('home.block4.box3.text1')}
                        </p>
                        <p className={styles.text}>
                            {t('home.block4.box3.text2')}.
                        </p>
                    </div>
                </div>
                <div className={`${styles.column}  ${styles.columnFourth}`}>
                    <div className={styles.circle}>
                        <p className={styles.title}>
                            {t('home.block4.box4.text1')}
                        </p>
                        <p className={styles.text}>
                            {t('home.block4.box4.text2')}
                        </p>
                    </div>
                </div>
                <div className={styles.buttonsBlock}>
                    <UIButton blueLight>Записаться на консультацию</UIButton>
                    <UIButton white>Посмотреть программы</UIButton>
                </div>
            </div>
            <p className={styles.textComforter}>{t('home.block4.comforter')}</p>
        </section>
    );
};

export default Results;