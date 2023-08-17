import React from 'react';
import {Courses} from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";

const Index = () => {
    return (
        <div>
            <Courses/>
            <Footer withPlanes={true}/>
        </div>
    );
};

export default Index;