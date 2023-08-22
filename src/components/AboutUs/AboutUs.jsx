import React from 'react';
import {useSwiper} from 'swiper/react';

// components
import {SwiperComponent} from "../SwiperComponent/SwiperComponent";

// styles
import * as styles from './aboutUs.module.scss';

// assets
import passport from '../../images/aboutUs/passport.png';
import team1 from '../../images/aboutUs/team1.png';
import team2 from '../../images/aboutUs/team2.png';
import team3 from '../../images/aboutUs/team3.png';
import girl from '../../images/aboutUs/girl.png';
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h2 className={`${styles.title} text96`}>Skilltostart</h2>
                    <p className="text36"><span>Skilltostart</span> {t('about.hero.text1')}</p>
                    <p className="text36">{t('about.hero.text2')}</p>
                    <p className="text36">{t('about.hero.text3')} <a href="https://t.me/skilltostart">https://t.me/skilltostart</a> {t('about.hero.text4')}</p>
                </div>
            </div>
            <div className={styles.passport}>
               <div className={styles.block}>
                   <div className={styles.blue}>
                       <div className={styles.box}>
                           <img src={passport} alt="img"/>
                           <ul>
                               <li className="text36">{t('about.passport.text1')}</li>
                               <li className="text36">{t('about.passport.text2')}</li>
                               <li className="text36">{t('about.passport.text3')}</li>
                           </ul>
                       </div>
                   </div>
                   <div className={styles.team}>
                       <div className={styles.container}>
                           <div className={styles.row}>
                               <div className={`${styles.column} ${styles.columnFirst}`}>
                                   <img src={team1} alt="img"/>
                                   <p className={`${styles.name} text64`}>{t('about.team.box1.text1')}</p>
                                   <p className={`${styles.description} text36`}>{t('about.team.box1.text2')}</p>
                               </div>
                               <div className={`${styles.column} ${styles.columnSecond}`}>
                                   <img src={team2} alt="img"/>
                                   <p className={`${styles.name} text64`}>{t('about.team.box2.text1')}</p>
                                   <p className={`${styles.description} text36`}>{t('about.team.box2.text2')}</p>
                               </div>
                               <div className={`${styles.column} ${styles.columnThird}`}>
                                   <img src={team3} alt="img"/>
                                   <p className={`${styles.name} text64`}>{t('about.team.box3.text1')}</p>
                                   <p className={`${styles.description} text36`}>{t('about.team.box3.text2')} <a href="https://www.metanomi.io/">Metanomi.io;</a> {t('about.team.box3.text3')} <a href="https://www.republic.com">Republic.com</a> {t('about.team.box3.text4')}</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={styles.carousel}>
                       <div className={styles.container}>
                           <SwiperComponent endpoint={'about-us-slider'}/>
                       </div>
                   </div>
               </div>
            </div>
            <div className={styles.facts}>
                <div className={styles.container}>
                    <p className={`${styles.title} text64`}>{t('about.facts.title.text1')} <br/> {t('about.facts.title.text2')}</p>
                    <div className={styles.block}>
                        <img src={girl} alt="img"/>
                        <ol>
                            <li className="text36">{t('about.facts.text1')}</li>
                            <li className="text36">{t('about.facts.text2')}</li>
                            <li className="text36">{t('about.facts.text3')}</li>

                            <li className="text36">{t('about.facts.text4')}</li>
                            <li className="text36">{t('about.facts.text5')}</li>
                            <li className="text36">{t('about.facts.text6')}</li>
                            <li className="text36">{t('about.facts.text7')}</li>
                            <li className="text36">{t('about.facts.text8')}</li>
                            <li className="text36">{t('about.facts.text9')}</li>
                            <li className="text36">{t('about.facts.text10')}</li>
                            <li className="text36">{t('about.facts.text11')}</li>
                        </ol>
                    </div>
                    <p className={`${styles.description} text36`}>{t('about.facts.text11')}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

