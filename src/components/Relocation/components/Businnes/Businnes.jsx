import React from 'react';

//styles
import * as styles from "./bussines.module.scss"
import {UIButton} from "../../../UI/Button/UIButton";
import {Link} from "gatsby";
import {useTranslation} from "react-i18next";

export const Businnes = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className={styles.root}>
                <div className={styles.container}>
                    <p className="text36"><span>{t('relocation.business.title')}</span></p>
                    <p className="text36">{t('relocation.business.text1')}</p>
                    <p className="text36">{t('relocation.business.text2')}</p>
                    <div className={`${styles.btnContainer} btnContainer`}>
                        <Link to={'/funding'}><UIButton blueLight>{t('relocation.business.btn1')}</UIButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};