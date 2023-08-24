import React from 'react';
import {RelocationPage} from "../../components/Relocation/RelocationPage";
import Footer from "../../components/Footer/Footer";
import * as styles from "./relocation.module.scss"

const Index = () => {
    return (
        <div className={styles.root}>
          <div className={styles.content}>
              <RelocationPage/>
          </div >
            <div className={styles.footer}>
                <Footer withPlanes={true}/>
            </div>
        </div>
    );
};

export default Index;