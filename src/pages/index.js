import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Post from '../components/post/post';
import Bio from '../components/bio/bio';

const BlogIndex = ({ data }) => (
  <Layout pageTitle="Movian's Blog">
    <Bio />
    {
      data.allMarkdownRemark.edges.map(post => {
        const { title, date, description, path } = post.node.frontmatter;

        return (
          <Post
            title={title}
            description={description}
            date={date}
            path={path}
            categories=""
            tags=""
          />
        );
      })
    }
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