import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GreenButton from './Button';

export default {
    title: 'Components/GreenButton',
    component: GreenButton,
} as Meta;

const Template: StoryFn<any> = (args) => <GreenButton {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
    size: 'large',
    label: 'Click',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
    size: 'small',
    label: 'Click',
};