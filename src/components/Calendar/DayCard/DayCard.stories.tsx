import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import DayCard, {LargeDayProps} from './DayCard';


export default {
    title: 'Components/Calendar/DayCard',
    component: DayCard,
} as Meta;

const Template: StoryFn<LargeDayProps> = (args) => <DayCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    day: 0,
};