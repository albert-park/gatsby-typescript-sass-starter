import React, { SFC } from 'react';
import { Link } from 'gatsby';

import * as styles from './header.module.scss';

export interface HeaderProps {
  siteTitle: string
}

const Header: SFC<HeaderProps> = (props) => (
  <div className={styles['header-wrapper']}>
    <div className={styles['inner']}>
      <h1>
        <Link
          to="/"
        >
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.defaultProps = {
  siteTitle: 'this is default prop',
}

export default Header;
