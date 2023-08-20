import React, {useEffect, useRef, useState} from "react";
import {Link} from "gatsby";
import {useDispatch, useSelector} from "react-redux";


// components
import {Container} from "../Container/Container";

//styles
import * as styles from "./header.module.scss";

//images
import logo from "./../../images/logo.png";
import basket from "./../../images/shopping-bag.svg";
import {changeUserLanguage} from "../../features/userSlice/userSlice";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import axios from "axios";



const Header = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {language} = useSelector(store => store.user.user);
    const {coursesList} = useSelector(store => store.user.user);

    const ref = useRef();
    const headerRef = useRef();


    const [hamburger, setHamburger] = useState(false);
    const [isRelocationActive, setRelocationActive] = useState(false);
    const [isCoursesActive, setCoursesActive] = useState(false);
    const [isLanguageActive, setLanguageActive] = useState(false);

    const languageVariant = language === 'RU' ? 'EN' : "RU"

    const clickHandler = () => {
        setHamburger(prev => !prev)
    }

    const handleRelocation = (bool) => {
        setRelocationActive(bool)
    }

    const handleCourses = (bool) => {
        setCoursesActive(bool)
    }

    const handleLanguage =(bool) => {
        setLanguageActive(bool)
    }

    const handleLanguageClick = () => {
        dispatch(changeUserLanguage(languageVariant))
    }

    const itest = () => {
        i18n.changeLanguage(languageVariant.toLowerCase())
    }




    return (
        <header className={styles.header}>
            <Container>
                <div className={`${styles.headerBlock} ${hamburger ? styles.open : ''}`}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <div ref={headerRef} onClick={clickHandler} className={`${styles.hamburger} ${hamburger ? styles.toggle : ''}`}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                    </div>
                    <div ref={ref} className={`${styles.headerContent} ${hamburger ? styles.open : ''}`}>
                        <ul className={`${styles.navLinks}`}>
                            <li className={`${hamburger ? styles.fade : ''}`}><Link className={styles.item} to="/">{t('header.text1')}</Link></li>
                            <li
                                onMouseOver={() => handleRelocation(true)}
                                onMouseLeave={() => handleRelocation(false)}
                                className={`${hamburger ? styles.fade : ''}`}>
                                <Link
                                    className={styles.item}
                                    to="/relocation"
                                >
                                    {t('header.text2')}
                                </Link>
                                <p className={`${styles.linksMenu} ${isRelocationActive ? styles.show : ''}`}>
                                    <Link className={styles.item} to='/startupviza'>{t('header.text3')}</Link>
                                    <Link className={styles.item} to='/visa'>{t('header.text4')}</Link>
                                    <Link className={styles.item} to='/funding'>{t('header.text5')}</Link>
                                    <Link className={styles.item} to='/cases'>{t('header.text6')}</Link>
                                </p>
                            </li>
                            <li
                                onMouseOver={() => handleCourses(true)}
                                onMouseLeave={() => handleCourses(false)}
                                className={`${hamburger ? styles.fade : ''}`}>
                                <Link
                                    to="/courses"
                                    className={styles.item}
                                >
                                    {t('header.text7')}
                                </Link>
                                <p className={`${styles.linksMenu} ${isCoursesActive ? styles.show : ''}`}>
                                    <Link className={styles.item} to='/instruments'>{t('header.text8')}</Link>
                                </p>
                            </li>

                            <li className={`${hamburger ? styles.fade : ''}`}><Link className={styles.item} to="/aboutUs">{t('header.text9')}</Link></li>
                            <li className={`${hamburger ? styles.fade : ''}`}><Link className={styles.item} to="/contacts">{t('header.text10')}</Link></li>
                            <li className={`${hamburger ? styles.fade : ''}`}><Link className={styles.item} to="/blog">{t('header.text11')}</Link></li>
                            <li className={`${hamburger ? styles.fade : ''}`}
                                onMouseOver={() => handleLanguage(true)}
                                onMouseLeave={() => handleLanguage(false)}
                                onClick={itest}
                            >
                                <Link
                                    className={styles.item}

                                >
                                    {language}
                                </Link>
                                <p onClick={handleLanguageClick} className={`${styles.linksMenu} ${styles.item} ${styles.linksMenuLanguage} ${isLanguageActive ? styles.show : ''}`}>
                                    {languageVariant}
                                </p>
                            </li>
                            <li className={styles.basket}>
                                <Link
                                    to="/checkout"
                                >
                                    <img  src={basket} alt="basket"/>
                                    <span>{coursesList.length}</span>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </Container>
        </header>
    );
};


export default Header;