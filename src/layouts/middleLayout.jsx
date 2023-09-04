import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchLinks} from "../features/linkSlice/linkSlice";
import Loader from "../components/UI/Loader/Loader";


const MiddleLayout = ({children}) => {
    const dispatch = useDispatch();
    const {links, error, isLoading} = useSelector(state => state.links);

    useEffect(() => {
        dispatch(fetchLinks())
    },[])

    if (isLoading) {
        return (
            <div>
                <Loader local={false}/>
            </div>
        )
    }
    if (error) {
        console.log(error)
        return (
            <div>
                ...error while links
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default MiddleLayout;