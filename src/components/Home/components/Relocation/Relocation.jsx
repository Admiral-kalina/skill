import React from "react";

// components
import {UIButton} from "../../../UI/Button/UIButton";

//styles
import * as styles from "./relocation.module.scss";

//images
import bg from "../../../../images/home/relocationBg.png";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {Link} from "gatsby";


const Relocation = ({link}) => {
    const {t} = useTranslation()

    return (
        <section className={styles.root}>
           <div className={styles.content}>
               <img className={styles.background} src={bg} alt="background"/>
               <h1 className={styles.title}>{t('home.title')}</h1>
               <div className={styles.body}>
                   <p>{t('home.subtitle.part1')}<br/>{t('home.subtitle.part2')}</p>
                   <div className={styles.button}>
                       <Link to={link}><UIButton blueRounded>{t('home.btn1')}</UIButton></Link>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Relocation;

// description.part1