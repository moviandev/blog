import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout'

const BlogIndex = () => (
  <Layout>
    <h1>All Posts</h1>
  </Layout>
);

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`

export default BlogIndex;