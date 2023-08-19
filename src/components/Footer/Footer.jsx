import React, {useEffect, useState} from "react";
//styles
import * as styles from "./footer.module.scss";

//images
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import telegram from "../../images/telegram.svg";
import youtube from "../../images/youtube.svg";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Footer = ({withPlanes}) => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };


    const handleClick = async (event) => {
        event.preventDefault()
        if (error === null){
            setEmail('')
            await axios.post(
                `http://localhost:1337/api/users-emails`,
                {
                    data: {
                        email: email
                    }
                }
            ).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <footer className={styles.footer}>
            <nav className={styles.navigation}>
                <a href="#">
                    <img className={styles.logo} src={logo} alt=""/>
                </a>
                <div className={styles.contactinfo}>
                    <p>Contact Info</p>
                    <a href="#">skilltostart@gmail.com</a>
                </div>
                <p className={styles.copyright}>© Skill to Start 2023 All rights reserved</p>
                <div className={styles.social}>
                    <a href="#">
                        <img className={styles.socialicon} src={facebook} alt=""/>
                    </a>
                    <a href="#">
                        <img className={styles.socialicon} src={youtube} alt=""/>
                    </a>
                    <a href="#">
                        <img className={styles.socialicon} src={instagram} alt=""/>
                    </a>
                    <a href="#">
                        <img className={styles.socialicon} src={telegram} alt=""/>
                    </a>
                </div>
            </nav>
            <div className={`${withPlanes ? styles.planesBlock : ''}`}></div>
            <div className={styles.formblock}>
                <div className={styles.content}>
                    <h3 className={styles.contacts}>{t('footer.text1')}</h3>
                    <div>
                        <h5 className={styles.email}>Email</h5>
                        <form action="">
                            <div>
                                {error && <p style={{color: 'red'}}>{error}</p>}
                                {error === null && email.length !== 0 ?
                                        <p style={{color: 'green'}}>email is valid</p>
                                        :
                                        ''
                                }
                                <input
                                    onChange={handleChange}
                                    value={email}
                                    className={styles.input}
                                    type="text"
                                    placeholder={t('footer.text2')}
                                />
                            </div>

                            <button onClick={handleClick} className={styles.submitbtn}>{t('footer.text3')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;