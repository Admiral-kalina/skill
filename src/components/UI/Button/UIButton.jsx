import React from "react";

import clsx from "clsx";

import * as cls from "./button.module.scss"


export const UIButton = ({
    children,
    onClick,
    white,
    transparent,
    blueRounded,
    blueLight,
    blueLightArrow,
    blueTwoColour,
    teal,
    red,
    send,
    style
}) => {
    const styles = clsx(cls.button,{
        [cls.white] : white,
        [cls.transparent] : transparent,
        [cls.blueRounded] : blueRounded,
        [cls.blueLight]: blueLight,
        [cls.blueLightArrow]: blueLightArrow,
        [cls.blueTwoColour]: blueTwoColour,
        [cls.teal]: teal,
        [cls.red]: red,
        [cls.send]: send,
    })

    return (
        <button onClick={onClick} style={style} className={styles}>
            {children}
        </button>
    );
};

