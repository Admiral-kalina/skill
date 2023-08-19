import React, {useState} from 'react';

// styles
import * as styles from './contacts.module.scss';

// assets
import building from '../../images/contacts/building.png';
import phone from '../../images/contacts/phone.png';
import {useTranslation} from "react-i18next";
import axios from "axios";

const Contacts = () => {
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
        <div className={styles.root}>
            <h2 className={styles.title}>контакты</h2>
            <div className={styles.box}>
                <img className={styles.phone} src={phone} alt="phoneImg"/>
                <div className={styles.row}>
                    <div className={`${styles.column} ${styles.columnLeft}`}>
                        <img src={building} alt="img"/>
                    </div>
                    <div className={`${styles.column} ${styles.columnRight}`}>
                        <p className="text36">Для консультаций по релокации, видам внж в Нидерландах, стартап визам, стратегии переезда в Нидерланды, запуску бизнеса.</p>
                        <ul>
                            <li className="text24">email: skilltostart@gmail.com</li>
                            <li className="text24">WhatsApp: +31642571679</li>
                            <li className="text24">https://t.me/skilltostart</li>
                            <li className="text24">https://www.facebook.com/skilltostart</li>
                        </ul>
                        <form action="">
                            <div className={styles.formContainer}>
                                {error && <p className={styles.error} style={{color: 'red'}}>{error}</p>}
                                {error === null && email.length !== 0 ?
                                    <p className={styles.success} style={{color: 'green'}}>Email is valid</p>
                                    :
                                    ''
                                }
                                <input

                                    onChange={handleChange}
                                    value={email}
                                    className='text24'
                                    type="text"
                                    placeholder={t('footer.text2')}
                                />
                            </div>

                            <button onClick={handleClick} className={styles.submitbtn}></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;