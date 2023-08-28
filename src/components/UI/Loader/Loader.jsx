import {Audio} from "react-loader-spinner";
import React from "react";

const Loader = ({local}) => {
    return(
        <div className={local? 'loaderLocal':'loaderGlobal'}>
            <Audio
                height="80"
                width="80"
                radius="9"
                color="#1831b7"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}

export default Loader;