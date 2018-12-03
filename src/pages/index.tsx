import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/Image';
import Layout from '../components/Layout'

import '@/styles/base.global'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
