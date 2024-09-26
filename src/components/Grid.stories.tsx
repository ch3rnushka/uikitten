import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';
import PlantCard from './PlantCard';

export default {
    title: 'Components/Grid',
    component: Grid,
} as Meta;

const Template: StoryFn = () => (
    <Grid>
        <PlantCard name="Aloe Vera" imageUrl="https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg" />
        <PlantCard name="Cactus" imageUrl="https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg" />
        <PlantCard name="Bamboo" imageUrl="https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg" />
    </Grid>
);

export const Default = Template.bind({});