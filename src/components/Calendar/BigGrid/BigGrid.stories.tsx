import BigGrid from "./BigGrid";
import DayCard from "../DayCard/DayCard";
import React from 'react';

export default {
    title: 'Components/Calendar/SevenDaysCalendar',
    component: BigGrid,
}

export const Default = () => (
    <BigGrid>
        {Array.from({ length: 7 }, (_, i) => (
            <DayCard day={i} />
        ))}
    </BigGrid>
);