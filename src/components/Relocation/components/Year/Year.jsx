import React from 'react';

//styles
import * as styles from "./year.module.scss";

//components
import {UIButton} from "../../../UI/Button/UIButton";

//assets
import girl from "../../../../images/relocation/yearGirl.png"
import {useTranslation} from "react-i18next";
import {Link} from "gatsby";

const Year = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <p className="text36"><span>{t('relocation.orientation.title')}</span></p>
                        <p className="text36">{t('relocation.orientation.text1')}</p>
                        <p className="text36">{t('relocation.orientation.text2')}</p>
                        <img className={styles.girl} src={girl} alt="img"/>
                    </div>
                    <div className={`btnContainer ${styles.btnContainer}`}>
                        <Link to={'/visa'}> <UIButton blueLight> {t('relocation.orientation.btn1')}</UIButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Year;