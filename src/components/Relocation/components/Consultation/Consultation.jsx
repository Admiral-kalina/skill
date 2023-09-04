import React from 'react';

//styles
import * as styles from "./consultation.module.scss"
import {UIButton} from "../../../UI/Button/UIButton";
import {useTranslation} from "react-i18next";
import {Link} from "gatsby";

const Consultation = ({link}) => {
    const {t} = useTranslation();
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <p className="text36"><span>{t('relocation.individual.title')}</span></p>
                <p className="text36">{t('relocation.individual.text1')} <br/> {t('relocation.individual.text2')}</p>
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <p className="text36">{t('relocation.individual.text3')}</p>
                    <p className="text36">{t('relocation.individual.text4')}</p>
                    <p className="text36">{t('relocation.individual.text5')}</p>
                    <p className="text36">{t('relocation.individual.text6')}</p>
                    <p className="text36">{t('relocation.individual.text7')}</p>
                    <p className="text36">{t('relocation.individual.text8')}</p>
                    <p className="text36">{t('relocation.individual.text9')}</p>
                    <p className="text36">{t('relocation.individual.text10')}</p>
                    <p className="text36">{t('relocation.individual.text11')}</p>
                    <div className={`btnContainer ${styles.btnContainer}`}>
                        <Link to={link}><UIButton blueLight>{t('relocation.individual.btn1')}</UIButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;