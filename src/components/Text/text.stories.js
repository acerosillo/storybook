import React from 'react';

import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'darkGrey'],
      },
    },
    textStyle: {
      control: {
        type: 'select',
        options: ['light', 'uppercase', 'bold', 'regular', 'small'],
      },
    },
  },
};

const Template = (args) => <Text {...args}>Hello World</Text>;

export const Default = Template.bind({});
Default.args = {
  element: 'h1',
  type: 'h1',
  color: 'white',
  textStyle: 'light',
};
