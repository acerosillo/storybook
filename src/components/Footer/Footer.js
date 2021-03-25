import React from 'react';
import { string, shape, arrayOf, bool } from 'prop-types';
import cx from 'classnames';

import styles from './footer.module.css';

const Footer = ({ footerData: { copyrightText, links }, fixedBottom = false }) => (
  <footer className={cx(styles.footer, { [styles.fixedBottom]: fixedBottom })}>
    <div className={styles.copyright}>{copyrightText}</div>
    <ul className={styles.list}>
      {links.map(({ text, url }, index) => (
        <li key={`footer-link-${index}`} className={styles.listItem}>
          <a className={styles.link} href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

Footer.propTypes = {
  footerData: shape({
    copyrightText: string.isRequired,
    links: arrayOf(
      shape({
        text: string.isRequired,
        url: string.isRequired,
      }),
    ).isRequired,
  }),
  fixedBottom: bool,
};

export default Footer;
