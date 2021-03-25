import React from 'react';
import { string, shape } from 'prop-types';

import Text from '../Text/Text';

import styles from './card.module.css';

const Card = ({ cardData: { heading, copy } }) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <Text element="h2" type="h2">
        {heading}
      </Text>
      <Text element="p" type="p" textStyle="small">
        {copy}
      </Text>
    </div>
  </div>
);

Card.propTypes = {
  cardData: shape({
    heading: string.isRequired,
    copy: string.isRequired,
  }).isRequired,
};

export default Card;
