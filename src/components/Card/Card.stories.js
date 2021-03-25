import React from 'react';
import Card from './Card';
import cardData from './cardData';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = () => (
  <>
    <div style={{ height: '100px', background: 'grey' }} />
    <Card cardData={cardData} />
  </>
);

export const Default = Template.bind({});
