import React from 'react';
import {Programs} from "./components/Programs/Programs";
import {Visa} from "./components/Visa/Visa";
import {Businnes} from "./components/Businnes/Businnes";
import Year from "./components/Year/Year";
import Consultation from "./components/Consultation/Consultation";
import Footer from "../Footer/Footer";

export const RelocationPage = () => {
    return (
        <div>
            <Programs/>
            <Visa/>
            <Businnes/>
            <Year/>
            <Consultation/>
        </div>
    );
};
