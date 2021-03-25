import { Accordion as AccessibleAccordion } from 'react-accessible-accordion';
import React from 'react';

import styles from './accordion.module.css';

const Accordion = ({
  allowMultipleExpanded = true,
  allowZeroExpanded = true,
  preExpanded = [],
  children,
}) => (
  <AccessibleAccordion
    className={styles.accordion}
    allowMultipleExpanded={allowMultipleExpanded}
    allowZeroExpanded={allowZeroExpanded}
    preExpanded={preExpanded}
  >
    {children}
  </AccessibleAccordion>
);

export default Accordion;
