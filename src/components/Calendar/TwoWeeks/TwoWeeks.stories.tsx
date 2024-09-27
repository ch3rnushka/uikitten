import TwoWeeks from "./TwoWeeks";
import DayCard from "../DayCard/DayCard";
import React from 'react';
import getFlowersNameLink from "../getFlowersNameLink";

export default {
    title: 'Components/Calendar/TwoWeeks',
    component: TwoWeeks,
}

export const Default = () => (
    <TwoWeeks>
        {Array.from({length: 14}, (_, i) => (
            <DayCard day={i} flowerName={getFlowersNameLink(i)[1]} imageLink={getFlowersNameLink(i)[0]}/>
        ))}
    </TwoWeeks>
);
