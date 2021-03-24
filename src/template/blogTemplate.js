import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Bio from '../components/bio/bio';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;

  return (
    <Layout>
      <article>
        <header>
          <h1>{title}</h1>
          <small>{date}</small>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }}></section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPost(
    $path: String!
  ) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        date
        title
        path
      }
      html
    }
  }
`;
