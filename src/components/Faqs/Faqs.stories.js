import React from 'react';

import Faqs from './Faqs';
import faqsData from './faqsData';

export default {
  title: 'Components/FAQs',
  component: Faqs,
};

const Template = () => <Faqs faqsData={faqsData} />;

export const Default = Template.bind({});