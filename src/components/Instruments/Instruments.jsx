import React, {useEffect} from 'react';
import {Link, navigate} from "gatsby";
import {useTranslation} from "react-i18next";
import { Audio } from 'react-loader-spinner'
//components
import {UIButton} from "../UI/Button/UIButton";

//styles
import * as styles from "./instruments.module.scss";

//assets
import founder from "../../images/instruments/founder.png";
import girlTop from "../../images/instruments/girlTop.png";
import library from "../../images/instruments/library.png";
import team1 from "../../images/instruments/team1.png";
import team2 from "../../images/instruments/team2.png";
import team3 from "../../images/instruments/team3.png";
import rating from "../../images/instruments/rating.png";
import vector from "../../images/instruments/vector.png";
import Loader from "../UI/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchInstrumentCource} from "../../features/instrumentsCourseSlice/instrumentsCourseSlice";
import {fetchFundingYoutube} from "../../features/fundingYoutubeSlice/fundingYoutubeSlice";
import StarRatings from "react-star-ratings/build/star-ratings";
import InstrumentsPayment from "./instrumentsPayment";
import FeedbackSlice from "../../features/feedback/feedbackSlice";
import SwiperFeedback from "../SwiperComponent/SwiperFeedback";
import {addUserCurse} from "../../features/userSlice/userSlice";



const Instruments = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {language} = useSelector(store => store.user.user);

    const handlePayClick = () => {
        dispatch(addUserCurse(course))
        navigate('/checkout')
    }

    useEffect(() => {
        dispatch(fetchInstrumentCource(language.toLowerCase()))
    },[language])


    const {instrumentPost, isLoading, error} = useSelector(res => res.instrumentCourse)

    const course = instrumentPost.attributes


    if (isLoading) {
        return (
            <div>
                 <Loader local={false}/>
            </div>
        )
    }

    if (error) {
        console.log(error)
        return (
            <div>
                ...error while page
            </div>
        )
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h2>{t('start.box1.text1')}</h2>
                    <p className="text36"><span>{t('start.box1.text2')}</span></p>
                    <p className="text36">{t('start.box1.text3')}</p>
                    <div className={styles.btnBlock}>
                        <div className="btnContainer">
                            <UIButton blueLight>{t('start.box1.btn1')}</UIButton>
                        </div>
                        <div className="btnContainer">
                            <UIButton onClick={handlePayClick} blueLight>{t('start.box1.btn2')}</UIButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.instruments}>
                <div className={styles.containerBox}>
                    <p className={`${styles.instrumentsTitle} text64`}>{t('start.box2.text1')}</p>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <p className={`${styles.title} text36`}>{t('start.box2.text2')}</p>
                            <ol>
                                <li className="text36">{t('start.box2.text3')}</li>
                                <li className="text36">{t('start.box2.text4')}</li>
                                <li className="text36">{t('start.box2.text5')}</li>
                            </ol>
                        </div>
                        <div className={styles.column}>
                            <p className={`${styles.title} text36`}>{t('start.box2.text6')}</p>
                            <ol>
                                <li className="text36">{t('start.box2.text7')}</li>
                                <li className="text36">{t('start.box2.text8')}</li>
                                <li className="text36">{t('start.box2.text9')}</li>
                                <li className="text36">{t('start.box2.text10')}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bonus}>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        <div className={styles.bonusContent}>
                            <img className={styles.girlTop} src={girlTop} alt="img"/>
                            <p className={`${styles.title} text64`}>{t('start.box3.text1')}</p>
                            <p className={`${styles.subTitle} text36`}>{t('start.box3.text2')}</p>
                            <div className={styles.row}>
                                <div className={`${styles.column} ${styles.columnLeft}`}>
                                    <img src={founder} alt="founder"/>
                                </div>
                                <div className={`${styles.column} ${styles.columnRight}`}>
                                    <p className="text36">{t('start.box3.text3')}</p>
                                    <div className={`${styles.btnBlock} btnContainer`}>
                                        <UIButton white>Оставить Заявку</UIButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.program}>
                <div className={styles.bg}>
                    <div className={styles.container}>
                        <div className={styles.mainContent}>
                            <p className={`${styles.title} text64`}>Программа курса</p>
                            <ol>
                                <li className="text36"><span>{t('start.box4.text1.span1')} </span>{t('start.box4.text1.text1')}</li>
                                <li className="text36">{t('start.box4.text2.text1')}<span> {t('start.box4.text2.span1')} </span> {t('start.box4.text2.text2')}</li>
                                <li className="text36">{t('start.box4.text3.text1')}<span>{t('start.box4.text3.span1')}</span>{t('start.box4.text3.text2')}</li>
                                <li className="text36"><span>{t('start.box4.text4.span1')}</span> {t('start.box4.text4.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text5.span1')}</span> {t('start.box4.text5.text1')} <span>{t('start.box4.text5.span2')}.</span>
                                </li>
                                <li className="text36"><span>{t('start.box4.text6.span1')}</span> {t('start.box4.text6.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text7.span1')}</span> {t('start.box4.text7.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text8.span1')}</span> {t('start.box4.text8.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text9.span1')}</span> {t('start.box4.text9.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text10.span1')}</span> {t('start.box4.text10.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text11.span1')}</span> {t('start.box4.text11.text1')}</li>
                                <li className="text36"><span>{t('start.box4.text12.span1')}</span> {t('start.box4.text12.text1')}<span> {t('start.box4.text12.span2')}</span> {t('start.box4.text12.text2')}</li>
                            </ol>
                        </div>
                        <div className={styles.additionalContent}>
                            <p className="text36">{t('start.box5.text1')}</p>
                            <ul>
                                <li className="text36">{t('start.box5.text2')}</li>
                                <li className="text36">{t('start.box5.text3')}</li>
                                <li className="text36">{t('start.box5.text4')}</li>
                                <li className="text36">{t('start.box5.text5')}</li>
                                <li className="text36">{t('start.box5.text6')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.whyNetherland}>
                <div className={styles.container}>
                    <div className={styles.preview}>
                        <h2>{t('start.box6.text1')}</h2>
                        <p className="text24">{t('start.box6.text2')}</p>
                        <p className="text24">{t('start.box6.text3')}</p>
                        <p className="text24"><a href="https://www.globalinnovationindex.org/gii-2021-report#">https://www.globalinnovationindex.org/gii-2021-report#</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutCourse}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <div className={styles.rowTop}>
                            <div className={styles.columnFirst}>
                                <p className="text32">
                                    <span>{t('start.box7.text1.span1')}</span> {t('start.box7.text1.text1')}</p>
                            </div>
                            <div className={styles.columnSecond}>
                                <p className="text32"><span>{t('start.box7.text2.span1')}</span> {t('start.box7.text2.text1')}</p>
                            </div>
                            <div className={styles.columnThird}>
                                <p className="text32">{t('start.box7.text3.text1')}<span>{t('start.box7.text3.span1')}</span> {t('start.box7.text3.text2')}</p>
                            </div>
                        </div>
                        <div className={styles.rowBottom}>
                            <div className={styles.columnFirst}>
                                <p className="text32">{t('start.box7.text4.text1')}<span>{t('start.box7.text4.span1')}</span> {t('start.box7.text4.text2')}</p>
                            </div>
                            <div className={styles.columnSecond}>
                                <p className="text32"><span>{t('start.box7.text5.span1')}</span> {t('start.box7.text5.text1')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.course}>
                        <p className={`${styles.title} text64`}>{t('start.box8.text1')}</p>
                        <div className={styles.row}>
                            <img src={library} alt="img"/>
                            <div className={styles.column}>
                                <p className="text36">{t('start.box8.text2')}</p>
                                <ul>
                                    <li className={`${styles.liFirst} text24`}>{t('start.box8.text3')}</li>
                                    <li className={`${styles.liSecond} text24`}>{t('start.box8.text4')}</li>
                                    <li className={`${styles.liThird} text24`}>{t('start.box8.text5')}</li>
                                    <li className={`${styles.liFourth} text24`}>{t('start.box8.text6')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.team}>
                <div className={styles.container}>
                        <p className={`${styles.title} text96`}>{t('start.box9.text1')}</p>
                        <p className="text36">{t('start.box9.text2')}</p>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <img src={team1} alt="img"/>
                            <p className="text36">{t('start.box9.text3')}</p>
                        </div>
                        <div className={styles.column}>
                            <img src={team2} alt="img"/>
                            <p className="text36">{t('start.box9.text4')} <a href="https://www.metanomi.io/">Republic.com (incl. Seedrs).</a></p>
                        </div>
                        <div className={styles.column}>
                            <img src={team3} alt="img"/>
                            <p className="text36">{t('start.box9.text5')}</p>
                        </div>
                    </div>
                    <div className={styles.additionalContent}>
                        <div className={styles.block}>
                            <p className="text36">{t('start.box9.text6')}</p>
                            <div className={styles.btnBlock}>
                                <UIButton red><Link to={'/'}>{t('start.box9.btn1')}</Link></UIButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.details}>
             <InstrumentsPayment handlePayClick={handlePayClick} course={course}/>
            </div>
            <div className={styles.feedback}>
                <SwiperFeedback isPageInstruments={true}/>
            </div>
        </div>
    );
};

export default Instruments;

