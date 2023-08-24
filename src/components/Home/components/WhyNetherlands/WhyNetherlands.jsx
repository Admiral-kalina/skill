import React from "react";
//styles
import * as styles from "./whyNetherlands.module.scss";
import {useTranslation} from "react-i18next";
import {UIButton} from "../../../UI/Button/UIButton";
import {Link} from "gatsby";
//images


const WhyNetherlands = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <h2 className={`${styles.title} text96`}>Почему Нидерланды?</h2>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span>1</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box1.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box1.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>2</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box2.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box2.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>3</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box3.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box3.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>4</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box4.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box4.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>5</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box5.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box5.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>6</span>
                        <p className={`${styles.title} text36`}>
                            {t('home.block8.box6.text1')}
                        </p>
                        <p className={`${styles.subtitle} text24`}>
                            {t('home.block8.box6.text2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNetherlands;