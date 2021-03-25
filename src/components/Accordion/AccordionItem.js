import {
  AccordionItem as AccessibleAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import React from 'react';
import Text from '../Text/Text';

import styles from './accordion.module.css';
  
const AccordionItem = ({ uuid, heading, children }) => (
  <AccessibleAccordionItem
    uuid={uuid}
    className={styles.accordionItem}
  >
    <AccordionItemHeading>
      <AccordionItemButton className={styles.accordionButton}>
        <div className={styles.focusWrapper} tabIndex={-1}>
          <Text
            type="h6"
            element="h6"
            className={styles.accordionHeading}
          >
            {heading}
          </Text>
        </div>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel className={styles.accordionPanel}>{children}</AccordionItemPanel>
  </AccessibleAccordionItem>
);
  
  export default AccordionItem;
  