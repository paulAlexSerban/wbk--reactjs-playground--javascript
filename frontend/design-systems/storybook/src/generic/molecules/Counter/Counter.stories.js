import { Counter } from '@prj--reactjs-application-library/generic-lib/lib/index';

import '@prj--reactjs-application-library/generic-lsg/lib/atoms/button.css';
import '@prj--reactjs-application-library/generic-lsg/lib/molecules/counter.css';

const meta = {
    title: 'Generic/Molecules/Counter',
    component: Counter,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

export const Base = {
    args: {
        color: '#f0f0f0',
        radius: '4px',
    },
};
