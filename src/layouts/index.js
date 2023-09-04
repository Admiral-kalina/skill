import React, {useEffect} from "react"

// redux
import {Provider, useDispatch} from "react-redux";
import {store} from "../app/store";

// i18n
import '../i18n';

// components
import Header from "../components/Header/Header";

// style
import "../styles/global.scss"
import MiddleLayout from "./middleLayout";
import {fetchLinks} from "../features/linkSlice/linkSlice";


export const Layout = ({children}) => {


    return (
        <Provider store={store}>
            <MiddleLayout>
                <Header/>
                {children}
            </MiddleLayout>
        </Provider>
    )
}


export default Layout