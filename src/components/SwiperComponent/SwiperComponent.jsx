import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAboutSlider} from "../../features/aboutSlider/aboutSliderSlice";

// swiper
import {Swiper, SwiperSlide,} from "swiper/react";
import {Navigation} from "swiper/modules";

// styles
import * as styles from './swiper.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';



export const SwiperComponent = ({endpoint}) => {
    const [buttonsActive, setButtonsActive] = useState({btnPrev:false,btnNext:true})
    const swiperRef = useRef();
    const {aboutSlides, isLoading, error} = useSelector(res => res.aboutSlider)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAboutSlider(endpoint))
    }, [])

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
        <div className={styles.carouselBlock}>
            <div className={styles.carouselButtons}>
                <button
                    className={`${styles.btnPrev} ${buttonsActive.btnPrev ? '' :styles.btnDisabled }`}
                    onClick={handlePrev}>
                </button>
                <button
                    className={`${styles.btnNext} ${buttonsActive.btnNext ? '' : styles.btnDisabled }`}
                    onClick={handleNext}>
                </button>
            </div>
            <Swiper
                modules={[Navigation]}
                allowTouchMove={false}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {aboutSlides?.map(el =>
                    <SwiperSlide>
                        <img src={`http://localhost:1337${el.attributes.url}`} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};