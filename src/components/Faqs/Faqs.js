import React from "react";
import { string, shape, arrayOf } from 'prop-types';

import Text from '../Text/Text';
import Accordion from '../Accordion/Accordion';
import AccordionItem from '../Accordion/AccordionItem';

import styles from './faqs.module.css';

const Faqs = ({ faqsData: { mainHeading, faqs }}) => (
  <div className={styles.container}>
    <div className={styles.innerWrapper}>
      <Text className={styles.heading} element="h3" type="h3" color="darkGrey">{mainHeading}</Text>
      <Accordion>
        {faqs.map(({heading, copy}, faqIndex) => (
          <AccordionItem key={`faq-${faqIndex}`} heading={heading}>
            {copy.map((paragraph, index) => (
              <Text 
                key={`copy-${faqIndex}-${index}`} 
                className={styles.faqParagraph} 
                element="p" 
                type="p" 
                textStyle="small"
              >
                {paragraph}
              </Text>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

Faqs.propTypes = {
  faqsData: shape({
    mainHeading: string.isRequired,
    faqs: arrayOf(
      shape({
        heading: string.isRequired,
        copy: arrayOf(string.isRequired),
      })
    ),
  }).isRequired,
};

export default Faqs;
