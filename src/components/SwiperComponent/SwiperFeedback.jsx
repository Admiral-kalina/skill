import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFeedbackSlider} from "../../features/feedback/feedbackSlice";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "gatsby";
import {UIButton} from "../UI/Button/UIButton";

// swiper
import {Swiper, SwiperSlide,} from "swiper/react";
import {Grid} from "swiper/modules";

// styles
import * as styles from './swiper.module.scss';
import "swiper/css/bundle";
import 'swiper/css/navigation';

//assets
import girlBottom from "../../images/instruments/girlBottom.png"
import Loader from "../UI/Loader/Loader";



const SwiperFeedback = ({isPageInstruments}) => {
    const {language} = useSelector(store => store.user.user);
    const [buttonsActive, setButtonsActive] = useState({btnPrev: false, btnNext: true})
    const swiperRef = useRef();
    const {feedbackSlides, isLoading, error} = useSelector(res => res.feedback)
    const dispatch = useDispatch()

    console.log('FEES',feedbackSlides)

    useEffect(() => {
        dispatch(fetchFeedbackSlider(language.toLowerCase()))
    }, [language])

    const setActive = () => {
        if (swiperRef.current.isBeginning) {
            setButtonsActive({btnNext: true, btnPrev: false})
        } else if (swiperRef.current.isEnd) {
            setButtonsActive({btnNext: false, btnPrev: true})
        } else {
            setButtonsActive({btnNext: true, btnPrev: true})
        }
    }

    const handleNext = () => {
        swiperRef.current?.slideNext()
        setActive()
    }

    const handlePrev = () => {
        swiperRef.current?.slidePrev()
        setActive()

    }


    if (isLoading) {
        return (
            <div>
                <Loader local={true}/>
            </div>
        )
    }
    if (error) {
        console.log(error)
        return (
            <div>
                ...error while loading slider
            </div>
        )
    }

    return (
        <div className={styles.feedbackBlock}>
            {isPageInstruments
                ?
                <p className={`${styles.instrumentsText} text96 `}>Выпускники о курсе</p>
                :
                <>
                    <div className={`${styles.btnBlock} text40`}>
                        <Link to={'/#'}><UIButton blueLinear>Информация о Нидерландах</UIButton></Link>
                    </div>
                    <p className={`textComforter ${styles.textComforter}`}>Еще больше!</p>
                </>
            }
            <div className={`${styles.container} ${isPageInstruments? styles.instrumentContainer : ''} feedbackSlider`}>
                {isPageInstruments ?
                    <img className={styles.girl} src={girlBottom} alt="picture"/>
                    :
                    <></>
                }

                <Swiper
                    modules={[Grid]}
                    slidesPerView={ 1 }
                    spaceBetween={50}
                    grid={{
                        rows: 2 ,
                        fill: "row",

                    }}

                    pagination={{
                        clickable: true,
                    }}

                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween:25,
                            grid: {
                                rows: 1,
                                fill: "row",
                            }
                        },
                    }}
                >
                    {feedbackSlides?.map(el =>
                        <SwiperSlide>
                            <div className={styles.wrapper}>
                                <div className={styles.block}>
                                    <img src={el.attributes.logo.data.attributes.url}
                                         alt="img"/>
                                    <p className={`${styles.text} text32`}>{el.attributes.comment}</p>
                                    <div className={styles.stars}>
                                        <StarRatings
                                            starSpacing="4px"
                                            rating={el.attributes.star}
                                            starRatedColor="#FFC107"
                                            numberOfStars={5}
                                            name='rating'
                                        />
                                    </div>
                                    <p className={`${styles.name} text36`}>{el.attributes.username}</p>
                                    <p className={`${styles.category} text24`}>{el.attributes.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={`${styles.carouselButtons} ${styles.feedbackButtons}`}>
                    <button
                        className={`${styles.btnPrev} ${buttonsActive.btnPrev ? '' : styles.btnDisabled}`}
                        onClick={handlePrev}>
                    </button>
                    <button
                        className={`${styles.btnNext} ${buttonsActive.btnNext ? '' : styles.btnDisabled}`}
                        onClick={handleNext}>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SwiperFeedback;