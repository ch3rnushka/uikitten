import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PlantCard, { PlantCardProps } from './PlantCard';

export default {
    title: 'Components/PlantCard',
    component: PlantCard,
} as Meta;

const Template: StoryFn<PlantCardProps> = (args) => <PlantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Aloe Vera',
    imageUrl: 'https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg',
};