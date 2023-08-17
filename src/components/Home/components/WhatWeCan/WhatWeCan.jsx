import React from "react";
//styles
import * as styles from "./whatWeCan.module.scss";
//images
import vector from "../../../../images/home/eVector.svg";
import flowers from "../../../../images/home/flowers.png";
import plane from "../../../../images/home/plane.png";
import amsterdam from "../../../../images/home/amsterdam.png"
import {useTranslation} from "react-i18next";

export const WhatWeCan = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <h3 className={styles.title}>{t('home.block2.title')}</h3>
            <ul className={styles.list}>
                <li>
                    {t('home.block2.item1')}
                </li>
                <li>
                    {t('home.block2.item2')}
                </li>
                <li>
                    {t('home.block2.item3')}
                </li>
                <li>
                    {t('home.block2.item4')}
                </li>
                <li>
                    {t('home.block2.item5')}
                </li>
            </ul>
            <img className={styles.vector} src={vector} alt="photo"/>
            <img className={styles.flowers} src={flowers} alt="photo"/>
            <img className={styles.plane} src={plane} alt="photo"/>
            <img className={styles.amsterdam} src={amsterdam} alt="amsterdam"/>
        </section>
    );
};