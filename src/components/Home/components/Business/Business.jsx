import React from "react";
//styles
import * as styles from "./business.module.scss";
//images
import city from "../../../../images/home/businessCity.png";
import cityFull from "../../../../images/home/businessCityFull.png"
import {useTranslation} from "react-i18next";


const BusinessInNetherlands = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <h3 className={styles.title}>{t('home.block3.title')}</h3>
                <p className={styles.description}>
                    {t('home.block3.description.item1')} <span >{t('home.block3.description.item2')} </span> {t('home.block3.description.item3')}<br/> {t('home.block3.description.item4')}</p>
                <p className={styles.description}>
                    {t('home.block3.description2')}
                </p>
                <div className={styles.row}>
                    <img className={styles.img} src={city} alt="" />
                    <p>{t('home.block3.description3.item1')}<br/> {t('home.block3.description3.item2')}</p>
                </div>
            </div>
            <img className={styles.cityFull} src={cityFull} alt="cityFull"/>
        </section>
    );
};

export default BusinessInNetherlands;