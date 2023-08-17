import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

// swiper
import {Swiper, SwiperSlide,} from "swiper/react";
import {Navigation} from "swiper/modules";

// styles
import * as styles from './swiper.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import WhyNetherlands from "../Home/components/WhyNetherlands/WhyNetherlands";
import {fetchFeedbackSlider} from "../../features/feedback/feedbackSlice";
import StarRatings from "react-star-ratings/build/star-ratings";

//assets
import background from "../../images/feedbackVector.svg"


const SwiperItem = ({el}) => {
    return(
        <SwiperSlide>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <img src={`http://localhost:1337${el.attributes.logo.data.attributes.url}`} alt="img"/>
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
    )
}


 const SwiperFeedback = () => {
     const {language} = useSelector(store => store.user.user);
    const [buttonsActive, setButtonsActive] = useState({btnPrev:false,btnNext:true})
    const swiperRef = useRef();
    const {feedbackSlides, isLoading, error} = useSelector(res => res.feedback)
    const dispatch = useDispatch()
     console.log('FEED', feedbackSlides)
    useEffect(() => {
        dispatch(fetchFeedbackSlider(language.toLowerCase()))
    }, [language])

    const setActive = () => {
        if(swiperRef.current.isBeginning){
            setButtonsActive({btnNext:true, btnPrev: false})
        }else if(swiperRef.current.isEnd){
            setButtonsActive({btnNext:false, btnPrev: true})
        }else{
            setButtonsActive({btnNext:true, btnPrev: true})
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
                ...loading
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
                <img className={styles.background} src={background} alt='background'/>
                <div className={styles.container}>
                <Swiper
                    modules={[Navigation]}
                    allowTouchMove={false}
                    slidesPerView={1}
                    // direction='vertical'
                    // centeredSlides={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {feedbackSlides?.map(el =>
                        <SwiperItem key={el.id} el={el}/>
                    )}
                </Swiper>
                    <div className={`${styles.carouselButtons} ${styles.feedbackButtons}`}>
                        <button
                            className={`${styles.btnPrev} ${buttonsActive.btnPrev ? '' :styles.btnDisabled }`}
                            onClick={handlePrev}>
                        </button>
                        <button
                            className={`${styles.btnNext} ${buttonsActive.btnNext ? '' : styles.btnDisabled }`}
                            onClick={handleNext}>
                        </button>
                    </div>
            </div>
        </div>
    );
};



export default SwiperFeedback;