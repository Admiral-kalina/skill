import React from 'react';

// styles
import * as styles from "./programs.module.scss"

// assets
import cityBg from "../../../../images/relocation/cityBg.png"
import {useTranslation} from "react-i18next";

export const Programs = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.root}>
           <div className={styles.container}>
               <h2>{t('relocation.program.title')}</h2>
               <p className='text32'>{t('relocation.program.text1')}</p>
           </div>
            <img src={cityBg} alt="img"/>
        </div>
    );
};

