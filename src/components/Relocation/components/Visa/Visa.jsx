import React from 'react';

// styles
import * as styles from "./visa.module.scss"

//assets
import meeting from "../../../../images/relocation/visa.png"
import {UIButton} from "../../../UI/Button/UIButton";
import {Link} from "gatsby";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

export const Visa = ({link}) => {

    const {t} = useTranslation();

    return (
        <>
            <div className={styles.root}>
                <div className={styles.container}>
                    <p className='text36'><span>{t('relocation.startup.title')}</span></p>
                    <p className="text36">{t('relocation.startup.text1')}</p>
                    <p className="text36">{t('relocation.startup.text2')}</p>
                    <p className="text36">{t('relocation.startup.text3')}</p>
                    <div className={styles.btnsBlock}>
                       <Link to={link}><UIButton blueLight>{t('relocation.startup.btn1')}</UIButton></Link>
                    </div>
                    <img src={meeting} alt="meeting"/>
                </div>

            </div>
            <div className={styles.btnContainer}>
                <Link to={'/'}><UIButton white>{t('relocation.startup.btn2')}</UIButton></Link>
            </div>
        </>
    );
};

