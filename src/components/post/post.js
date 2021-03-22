import React from 'react';
import { Link } from 'gatsby';

import '../../styles/styles.scss';
import './post.scss';

const buildCategoryTag = (categories) => {
  categories.map(element => {
    const classTag = `post-tag-${element.color}`
    return (
      <span className={classTag}>{element.name}</span>
    );
  });
}

const buildPostDate = (date) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  const newDate = new Date(date);
  const day = newDate.getDate() + 1;
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getUTCFullYear();

  return `${year} ${month} ${day}`;
}

const Post = ({ title, description, date, path, categories, tags }) => (
  <article className="post">
    <header>
      <h2 className="post-title"><Link to={path} className="post-title-link">{title}</Link></h2>
      <small>{buildPostDate(date)}</small>
    </header>
    <section>
      <p className="post-description">{description}</p>
      {/* {buildCategoryTag(categories)} */}
    </section>
  </article>
);

export default Post;
