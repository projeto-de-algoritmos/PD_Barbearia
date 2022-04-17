import React from "react";
import { useState } from 'react';

import './Job.css'


export default props => {
    const [jobStyle, setJobStyle] = useState("notChosen");

    const changeColor = () => {
        if(jobStyle == "notChosen")
            setJobStyle("chosen")
        else
            setJobStyle("notChosen")
    }

    return (
        <div className={jobStyle} onClick={() => {
            props.addJob(props.data.job, props.data.price);
            changeColor();
        }}>
            <div>{props.data.job}</div>
            <div>R$ {props.data.price}</div>
        </div>
    )
}