import React from 'react';

import * as cls from "./container.module.scss"

import clsx from "clsx";


export const Container = ({children, containerLarge}) => {
    const styles = clsx(cls.container,{
        [cls.containerLarge]:containerLarge
    })

    return (
        <div className={styles}>
            {children}
        </div>
    );
};
