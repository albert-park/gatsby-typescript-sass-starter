import React, { SFC } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import * as styles from './layout.module.scss'

export interface LayoutProps {
  children: Object,
}

const Layout: SFC<LayoutProps> = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className={styles['body-inner']}
        >
          {props.children}
        </div>
      </>
    )}
  />
)

export default Layout
