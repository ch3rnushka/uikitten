import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
    title: 'Typography/Text',
    component: Text,
    argTypes: {
        color: { control: 'color' },
        fontSize: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args}>Sample Text</Text>;

export const Default = Template.bind({});
Default.args = {
    color: '#333333',
    fontSize: '16px',
};

export const CustomText = Template.bind({});
CustomText.args = {
    color: '#2e8b57',
    fontSize: '24px',
};