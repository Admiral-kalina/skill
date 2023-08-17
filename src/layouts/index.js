import React from "react"
import {BrowserRouter} from "react-router-dom";

// redux
import {Provider} from "react-redux";
import {store} from "../app/store";

// i18n
import '../i18n';

// components
import Header from "../components/Header/Header";

// style
import "../styles/global.scss"
import MiddleLayout from "./middleLayout";
import {Trans, useTranslation} from "react-i18next";

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
};

export const Layout = ({children}) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <MiddleLayout>
                    <Header/>
                    {children}
                </MiddleLayout>
            </Provider>
        </BrowserRouter>
    )
}


export default Layout