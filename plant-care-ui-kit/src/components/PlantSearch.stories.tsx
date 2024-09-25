import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PlantSearch, { PlantSearchProps } from './PlantSearch';

export default {
    title: 'Components/PlantSearch',
    component: PlantSearch,
} as Meta;

const Template: StoryFn<PlantSearchProps> = (args) => {
    const [query, setQuery] = useState('');

    const handleSearch = (newQuery: string) => {
        setQuery(newQuery);
    };

    return <PlantSearch {...args} query={query} onSearch={handleSearch} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Search plants...',
};
