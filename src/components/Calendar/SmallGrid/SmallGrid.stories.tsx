import SmallGrid from "./SmallGrid";
import DayCard from "../DayCard/DayCard";
import React from 'react';
import TwoWeeks from "../TwoWeeks/TwoWeeks";
import getFlowersNameLink from "../getFlowersNameLink";

export default {
    title: 'Components/Calendar/ThreeDaysCalendar',
    component: SmallGrid,
}

export const Default = () => (
    <SmallGrid>
        {Array.from({length: 3}, (_, i) => (
            <DayCard day={i} flowerName={getFlowersNameLink(i)[1]} imageLink={getFlowersNameLink(i)[0]}/>
        ))}
    </SmallGrid>
);