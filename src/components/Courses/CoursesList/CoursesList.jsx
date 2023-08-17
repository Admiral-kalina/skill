import React, {useEffect, useRef, useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

//components
import {UIButton} from "../../UI/Button/UIButton";

//styles
import * as styles from "./coursesList.module.scss";

//assets

import {useDispatch, useSelector} from "react-redux";
import {fetchCourses} from "../../../features/coursesSlice/coursesSlice";
import MolliePayment from "../../Payment/Payment";
import axios from "axios";
import {navigate} from "gatsby";
import {redirect} from "react-router-dom";
import {addUserCurse} from "../../../features/userSlice/userSlice";
import {locInGraphQlToLocInFile} from "gatsby/dist/query/error-parser";



export const CoursesList = () => {
    const {language} = useSelector(store => store.user.user);
    const {courses, isLoading, error} = useSelector(res => res.courses)
    const [payLink, setPayLink] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCourses(language.toLowerCase()))
    }, [language])

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
        <div className={styles.container}>
            <div className={styles.row}>
                {courses.map(el =>
                    <CoursesElement attributes={el.attributes}/>
                )}

            </div>
        </div>
    );
};

const CoursesElement = ({attributes}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addUserCurse(attributes))
    }

    const url = attributes.image.data.attributes.url;

    return (
        <div className={styles.column}>
            <div className={styles.content}>
                <p className={`${styles.title} text36`}>{attributes.title}</p>
                <div className={styles.stars}>
                    <StarRatings
                        starSpacing="4px"
                        rating={attributes.star}
                        starRatedColor="#FFC107"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
                <div className={styles.priceBlock}>
                    <p className="price">{attributes.price}€</p>
                    <UIButton onClick={handleClick} teal>Добавить в корзину</UIButton>
                </div>
            </div>
            <img className={styles.preview} src={`http://localhost:1337${url}`} alt="course"/>
        </div>
    )
}

