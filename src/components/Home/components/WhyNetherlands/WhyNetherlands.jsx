import React from "react";
//styles
import * as styles from "./whyNetherlands.module.scss";
import {useTranslation} from "react-i18next";
//images


const WhyNetherlands = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span>1</span>
                        <p className={styles.title}>
                            {t('home.block8.box1.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box1.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>2</span>
                        <p className={styles.title}>
                            {t('home.block8.box2.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box2.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>3</span>
                        <p className={styles.title}>
                            {t('home.block8.box3.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box3.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>4</span>
                        <p className={styles.title}>
                            {t('home.block8.box4.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box4.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>5</span>
                        <p className={styles.title}>
                            {t('home.block8.box5.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box5.text2')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span>6</span>
                        <p className={styles.title}>
                            {t('home.block8.box6.text1')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('home.block8.box6.text2')}
                        </p>
                    </div>
                </div>
            </div>
            {/*<p className={`textComforter ${styles.textComforter}`}>Еще больше!</p>*/}
        </section>
    );
};

export default WhyNetherlands;