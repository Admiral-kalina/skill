import React from "react";
//styles
import * as styles from "./products.module.scss";
//images
import products1 from "../../../../images/home/products1.png";
import products2 from "../../../../images/home/products2.png";
import products3 from "../../../../images/home/products3.png";
import products4 from "../../../../images/home/products4.png";
import productVector from "../../../../images/arrow.svg"
import vector from "../../../../images/home/productsVector.svg";
import {useTranslation} from "react-i18next";
import {Link} from "gatsby";

const Products = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{t('home.block5.title')}</h3>
                    <div className={styles.container}>
                        <img className={styles.productimg} src={products1} alt=""/>
                        <div className={styles.contentcontainer}>
                            <h4 className={styles.producttitle}>
                                {t('home.block5.box1.text1')}
                            </h4>
                            <p className={styles.description}>
                                {t('home.block5.box1.text2')}
                            </p>
                            <button className={styles.button}>
                                <Link to={''}>Подробнее</Link>
                                <span>
                <img className={styles.productvector} src={productVector} alt=""/>
              </span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.contentcontainer}>
                            <h4 className={styles.producttitle}>
                                {t('home.block5.box2.text1')}
                            </h4>
                            <p className={styles.description}>
                                {t('home.block5.box2.text2')}
                            </p>
                            <button className={styles.button}>
                                <Link to={''}>Подробнее</Link>
                                <span>
                            <img className={styles.productvector} src={productVector} alt=""/>
              </span>
                            </button>
                        </div>
                        <img className={styles.productimg} src={products2} alt=""/>
                        {/*<img className={styles.planessvg} src={planes} alt=""/>*/}
                    </div>

                    <div className={styles.container}>
                        <img className={styles.productimg} src={products3} alt=""/>
                        <div className={styles.contentcontainer}>
                            <h4 className={styles.producttitle}>{t('home.block5.box3.text1')}</h4>
                            <p className={styles.description}>
                                {t('home.block5.box3.text2')}
                            </p>
                            <button className={styles.button}>
                                <Link to={''}>Подробнее</Link>
                                <span>
                <img className={styles.productvector} src={productVector} alt=""/>
              </span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.contentcontainer}>
                            <h4 className={styles.producttitle}>
                                {t('home.block5.box4.text1')}
                            </h4>
                            <p className={styles.description}>
                                {t('home.block5.box4.text2')}
                            </p>
                            <button className={styles.button}>
                                <Link to={''}>Подробнее</Link>
                                <span>
                <img className={styles.productvector} src={productVector} alt=""/>
              </span>
                            </button>
                        </div>
                        <img className={styles.productimg} src={products4} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.comforterBlock}>
                <p className={`${styles.comforterFirst} textComf`}>{t('home.block5.box5.text1')}</p>
                <p className={`${styles.comforterSecond} textComf`}>{t('home.block5.box5.text2')}</p>
            </div>
        </section>
    );
};

export default Products;