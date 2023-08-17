import React from 'react';
import * as cls from './input.module.scss'

export const UIInput = (props) => {
    return (
        <input {...props} className={cls.input} type="text"/>
    );
};