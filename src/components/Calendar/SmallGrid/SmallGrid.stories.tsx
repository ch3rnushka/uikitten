import SmallGrid from "./SmallGrid";
import DayCard from "../DayCard/DayCard";
import React from 'react';
import TwoWeeks from "../TwoWeeks/TwoWeeks";

export default {
    title: 'Components/Calendar/ThreeDaysCalendar',
    component: SmallGrid,
}

export const Default = () => (
    <SmallGrid>
        {Array.from({ length: 3 }, (_, i) => (
            <DayCard day={i} />
        ))}
    </SmallGrid>
);