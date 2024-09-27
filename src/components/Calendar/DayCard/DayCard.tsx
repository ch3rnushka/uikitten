import React from "react";
import {css} from '@emotion/css'

export type LargeDayProps = {
    day: number;
    imageLink: string;
    flowerName: string;
};

export default function DayCard(props: LargeDayProps) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + props.day);
    const day = currentDate.getDate();
    const dayName = currentDate.toUTCString().split(",")[0];

    return (<>
        <div id='main' className={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;`}>
            <div id='info' className={css`
                border: 2px solid black;
                height: 20%;
                text-align: center;`}>
                <h1>{dayName}, {day}</h1>
            </div>
            <div id='date' className={css`
                border: 2px solid black;
                height: 80%;`}>
                <img className={css`
                    height: 400px;
                    width: 100%;`} src={props.imageLink} alt='flower image'/>
                <h2 className={css`
                    text-align: center;`}>{props.flowerName}</h2>
                <p className={css`
                    text-align: center;`}>
                    28.09
                </p>
            </div>
        </div>
    </>)
}