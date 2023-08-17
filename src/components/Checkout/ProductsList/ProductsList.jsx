import React from 'react';
import {useSelector} from "react-redux";

import StarRatings from "react-star-ratings/build/star-ratings";

// styles
import * as styles from "./productsList.module.scss";

// images
import img from "../../../images/checkoutImg.png";
import {calculateTotalPrice} from "../../../helpers/calculateTotalPrice";
import {useTranslation} from "react-i18next";


const ProductsList = ({coursesList, totalPrice}) => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
            <p className={`${styles.title} text40`}>{t('checkout.text6')}</p>
            <div className={styles.coursesRow}>
                {coursesList.map((el, index) =>
                    <div key={index}>
                        <p className={`${styles.orderNumber} text40`}>{index + 1}</p>
                        <div className={styles.box}>
                            <p className={`${styles.name} text36`}>{el.title}</p>
                            <div className={styles.stars}>
                                <StarRatings
                                    starSpacing="4px"
                                    rating={el.star}
                                    starRatedColor="#FFC107"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <div className={styles.priceBlock}>
                                <p className="price">€{el.price}</p>
                                <img src={img} alt="img"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <p className={`${styles.totalPrice} text40`}>
                {t('checkout.text7')} €{totalPrice}
            </p>
        </div>
    );
};

export default ProductsList;