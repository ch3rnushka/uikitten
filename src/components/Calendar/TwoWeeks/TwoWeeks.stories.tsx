import TwoWeeks from "./TwoWeeks";
import DayCard from "../DayCard/DayCard";
import React from 'react';

export default {
    title: 'Components/Calendar/TwoWeeks',
    component: TwoWeeks,
}

export const Default = () => (
    <TwoWeeks>
        {Array.from({ length: 14 }, (_, i) => (
            <DayCard day={i} />
        ))}
    </TwoWeeks>
);
