import React from 'react';

// styles
import * as styles from "./instruments.module.scss";


import rating from "../../images/instruments/rating.png";
import {UIButton} from "../UI/Button/UIButton";
import {Link} from "gatsby";
import vector from "../../images/instruments/vector.png";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {addUserCurse} from "../../features/userSlice/userSlice";

const InstrumentsPayment = ({course, handlePayClick}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();


    return (
        <div className={styles.container}>

            <div className={styles.box}>
                <p className={`${styles.title} text64`}>{t('start.box10.text1')}</p>
                <div className={styles.content}>
                    <p className="text36">Курс проходит в форме онлайн - практикума 2 раза в неделю по 1,5 часа + 1 индивидуальное занятие.</p>
                    <p className="text36">Формат обучения - вебинары, видеолекции, практические задания.Мы используем платформу ZOOM и предоставляем доступ к записям на 6 месяцев.</p>
                    <p className="text36">Если остались вопросы, пишите на <a href="mailto:skilltostart@gmail.com">skilltostart@gmail.com</a></p>
                    <p className="text36">Сомневаетесь? Почитайте наш <a href="https://t.me/skilltostart">Телеграм канал.</a></p>
                    <div className={styles.stars}>
                        <StarRatings
                            starSpacing="4px"
                            rating={course.star}
                            starRatedColor="#FFC107"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <p className={`${styles.discount} text36`}>Стоимость участия — <span>€{course.oldPrice}</span></p>
                    <p className={`${styles.price} text48`}>Специальная цена <span>€{course.price}</span></p>
                    <div className={styles.btnBlock}>
                        <UIButton onClick={handlePayClick} red>ОПЛАТИТЬ КУРС</UIButton>
                    </div>
                </div>
                <div className={styles.comforterBlock}>
                    <img src={vector} alt="img"/>
                    <p className="textComf">{t('start.box10.text2')}</p>
                </div>
            </div>
        </div>
    );
};

export default InstrumentsPayment;