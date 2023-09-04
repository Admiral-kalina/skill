import React from 'react';
import {Programs} from "./components/Programs/Programs";
import {Visa} from "./components/Visa/Visa";
import {Businnes} from "./components/Businnes/Businnes";
import Year from "./components/Year/Year";
import Consultation from "./components/Consultation/Consultation";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";

export const RelocationPage = () => {
    const {second} = useSelector(state => state.links.links);
    return (
        <div>
            <Programs/>
            <Visa link={second}/>
            <Businnes/>
            <Year/>
            <Consultation link={second}/>
        </div>
    );
};
