import React from 'react';

// components
import Relocation from "./components/Relocation/Relocation";
import {WhatWeCan} from "./components/WhatWeCan/WhatWeCan";
import Business from "./components/Business/Business";
import Results from "./components/Results/Results";
import Products from "./components/Products/Products";
import ForClients from "./components/ForClient/ForClient";
import WhyNetherlands from "./components/WhyNetherlands/WhyNetherlands";
import YoutubeList from "../Courses/YoutubeList/YoutubeList";
import SwiperFeedback from "../SwiperComponent/SwiperFeedback";

// styles
import * as styles from "./home.module.scss"

// assets

import avatar from "../../images/courses/avatar.png";
import Footer from "../Footer/Footer";
import Loader from "../UI/Loader/Loader";
import {useSelector} from "react-redux";



export const Home = () => {
    const {first} = useSelector(state => state.links.links);

    return (
        <div className={styles.home}>
            <Relocation link={first}/>
            <WhatWeCan/>
            <Business/>
            <Results link={first}/>
            <Products/>
            <ForClients/>
            <WhyNetherlands/>
            <SwiperFeedback/>
           <div className={styles.footerBlock}>
               <Footer withPlanes/>
           </div>
        </div>

    );
};

