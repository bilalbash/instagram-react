import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt='RafehQazi'
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img className="post__image" src="https://hackernoon.com/images/z2xg2bpo.jpg" alt="" />

      <h4 className="post__text"><strong>arbabali</strong> WOW day three of live session</h4>
    </div>
  )
}

export default Post;
