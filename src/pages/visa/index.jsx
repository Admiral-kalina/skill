import React from 'react';
import Visa from "../../components/Visa/Visa";
import Footer from "../../components/Footer/Footer";
import {useSelector} from "react-redux";

const Index = () => {

    return (
        <div>
            <Visa/>
            <Footer/>
        </div>
    );
};

export default Index;