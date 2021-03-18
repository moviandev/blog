import React from 'react';
import { Link } from 'gatsby';
import './post.css';

const buildCategoryTag = (categories) => {
  categories.map(element => {
    const classTag = `post-tag-${element.color}`
    return (
      <span className={classTag}>{element.name}</span>
    );
  });
}

const Post = ({ title, description, date, path, categories, tags }) => (
  <div className="post">
    <h3 className="post-title"><Link to={path} className="post-title-link">{title}</Link></h3>
    <span className="post-date">{date}</span>
    <p className="post-description">{description}</p>
    {/* {buildCategoryTag(categories)} */}
  </div>
);

export default Post;
