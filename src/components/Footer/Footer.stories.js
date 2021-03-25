import React from 'react';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const footerData = {
  copyrightText: '© 2020 Volkswagen Group of America, Inc. All Rights Reserved.',
  links: [
    {
      text: 'VCCI',
      url: 'https://newspress-vwgroup.s3.amazonaws.com/documents%2foriginal%2f468-vcciarticlesofamendment.pdf',
    },
    {
      text: 'VWGoAF',
      url:
        'https://newspress-vwgroup.s3.amazonaws.com/documents%2foriginal%2f464-20140412vwgoafcertificateofformation.pdf',
    },
    {
      text: 'Privacy statement',
      url: 'https://www.volkswagengroupofamerica.com/en-us/privacy-statement',
    },
    {
      text: 'California Supply Chain Policy',
      url: 'https://www.volkswagengroupofamerica.com/en-us/california-supply-chain-policy',
    },
    {
      text: 'Terms & Agreements',
      url: 'https://www.volkswagengroupofamerica.com/en-us/terms-agreements',
    },
  ],
};

const Template = () => <Footer footerData={footerData} />;

export const Default = Template.bind({});
