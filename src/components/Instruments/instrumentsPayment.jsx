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
                    <p className="text36">{t('start.payment.text1')}</p>
                    <p className="text36"></p>
                    <p className="text36">{t('start.payment.text2')} <a href="mailto:skilltostart@gmail.com">skilltostart@gmail.com</a></p>
                    <p className="text36">{t('start.payment.text3')} <a href="https://t.me/skilltostart"> {t('start.payment.text4')}</a></p>
                    <div className={styles.stars}>
                        <StarRatings
                            starSpacing="4px"
                            rating={course.star}
                            starRatedColor="#FFC107"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <p className={`${styles.discount} text36`}>{t('start.payment.text6')} <span>€{course.oldPrice}</span></p>
                    <p className={`${styles.price} text48`}>{t('start.payment.text7')} <span>€{course.price}</span></p>
                    <div className={styles.btnBlock}>
                        <UIButton onClick={handlePayClick} red>{t('start.payment.btn1')} </UIButton>
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