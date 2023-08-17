import React from "react";
//styles
import * as styles from "./forClients.module.scss";
//images
import avatar1 from "../../../../images/home/avatar1.png";
import avatar2 from "../../../../images/home/avatar2.png";
import avatar3 from "../../../../images/home/avatar3.png";
import avatar from "../../../../images/courses/avatar.png";
import YoutubeList from "../../../Courses/YoutubeList/YoutubeList";
import {useTranslation} from "react-i18next";

const ForClients = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('home.block6.title')}</h2>
                <div className={styles.clientcontainer}>
                    <div className={styles.content}>
                        <img className={styles.clientpicture} src={avatar1} alt="" />
                        <div>
                            <h5 className={styles.revtitle}>
                                {t('home.block6.box1.text1')}
                            </h5>
                            <p className={styles.description}>
                                {t('home.block6.box1.text2')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.clientcontainer}>
                    <div className={styles.content}>
                        <img className={styles.clientpicture} src={avatar2} alt="" />
                    <div>
                        <h5 className={styles.revtitle}>
                            {t('home.block6.box2.text1')}
                        </h5>
                        <p className={styles.description}>
                            {t('home.block6.box2.text2')}
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.clientcontainer}>

                    <div className={styles.content}>
                        <img className={styles.clientpicture} src={avatar3} alt="" />
                        <div>
                            <h5 className={styles.revtitle}>
                                {t('home.block6.box3.text1')}
                            </h5>
                            <p className={styles.description}>
                                {t('home.block6.box3.text2')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.youtube}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <h2>{t('home.block7.title')}</h2>
                        <YoutubeList mainPage={true}/>
                        <div className={styles.comforterBlock}>
                            <p className="textComf">{t('home.block7.conduit')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForClients;