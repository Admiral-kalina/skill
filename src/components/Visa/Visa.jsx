import React from 'react';

//styles
import * as styles from "./visa.module.scss"
import library from "../../images/startupVisa/library.png";
import {UIButton} from "../UI/Button/UIButton";
import girl from "../../images/visa/girl.png";
import {useTranslation} from "react-i18next";

const Visa = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <h2>{t('visa.title')}</h2>
                    <p className={`text32 ${styles.subtitle}`}>{t('visa.subtitle')}</p>
                    <p className="text36">{t('visa.box1.text1')}</p>
                    <p className="text36">{t('visa.box1.text2')}</p>
                </div>
                <div className={styles.yellow}>
                    <div className={styles.container}>
                        <p className="text36">{t('visa.box2.text1')}</p>
                        <p className="text36">
                            {t('visa.box2.text2')}
                            <a href="https://www.timeshighereducation.com/world-university-rankings/2022/world-ranking#!/page/0/length/25/sort_by/rank/sort_order/asc/cols/stats">Times Higher Education World University Rankings </a>
                            and
                            <a href="https://www.timeshighereducation.com/world-university-rankings/by-subject"> Times Higher Education World University Rankings by Subject.</a>
                        </p>
                        <p className="text36">
                            {t('visa.box2.text2')}
                            <a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2022">QS World University Rankings </a>
                            and
                            <a href="https://www.topuniversities.com/subject-rankings/2021"> QS World University Rankings by subject.</a>
                            </p>
                        <p className="text36">
                            {t('visa.box2.text3')}
                            <a href="https://www.shanghairanking.com/rankings/arwu/2021">Academic Ranking of World Universities </a>
                            and
                            <a href="https://www.shanghairanking.com/rankings/gras/2021"> ShanghaiRanking's Global Ranking of Academic Subjects .</a>
                        </p>

                    </div>
                </div>
                <div className={styles.container}>
                    <p className="text36">{t('visa.box2.text4')}</p>
                    <p className="text36">{t('visa.box2.text5')}</p>
                    <p className="text36">
                        {t('visa.box2.text6')}
                        <a href="https://www.internationalstudy.nl/en/documenten/gedragscode-en-reglementen/"> Code of Conduct for International Students in Higher Education </a>
                        {t('visa.box2.text7')}
                    </p>
                    <p className="text36">{t('visa.box2.text8')}</p>
                </div>
            </div>
            <div className={styles.leftZeroBlock}>
                <div className={styles.containerBig}>
                    <div className={`${styles.row} ${styles.library}`}>
                        <img src={library} alt="library"/>
                        <div>
                            <p className="text36"><span>{t('visa.box3.text1')}</span></p>
                            <p className="text36">{t('visa.box3.text2')}</p>
                            <p className="text36">{t('visa.box3.text3')}</p>
                            <p className="text36">{t('visa.box3.text4')}</p>
                            <p className="text36">{t('visa.box3.text5')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.full}>
                <div className={styles.container}>
                    <p className="text36">{t('visa.box3.text6')}</p>
                    <div className={`btnContainer ${styles.btnContainer}`}>
                        <UIButton blueLight>{t('visa.box3.btn1')}</UIButton>
                    </div>
                    <img src={girl} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Visa;