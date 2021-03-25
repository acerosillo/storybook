import React from 'react';

import AppTemplate from '../components/AppTemplate/AppTemplate';
import SEO from '../components/seo';

import Text from '../components/Text/Text';
import Faqs from '../components/Faqs/faqs';
import faqsData from '../components/Faqs/faqsData';

import tokens from '../tokens/tokens';

const IndexPage = () => (
  <AppTemplate>
    <SEO title="Home" />

    <Text element="h1" type="h1">
      <a href="/news">News</a>
    </Text>

    <Text element="h1" type="h1">
      Lorem ipsum dolor
    </Text>
    <Text element="h2" type="h2">
      Lorem ipsum dolor
    </Text>
    <Text element="h3" type="h3">
      Lorem ipsum dolor
    </Text>
    <Text element="h4" type="h4">
      Lorem ipsum dolor
    </Text>

    <div style={{ padding: '20px', background: tokens.customProperties.color.background.one, marginTop: '20px' }}>
      <Text element="p" type="p" color="white">
        Lorem ipsum dolor
      </Text>
    </div>

    <Faqs faqsData={faqsData} />
  </AppTemplate>
);

export default IndexPage;
