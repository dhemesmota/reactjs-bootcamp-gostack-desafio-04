import React from 'react'

import './Post.css'

import Comment from './Comment'

function Post({ data }) {
  return (
    <div id="post">
      <div className="header">
        <div className="content">
          <img src={data.author.avatar} alt={data.author.name}/>
          <div className="header-user">
            <strong>{data.author.name}</strong>
            <small>{data.date}</small>
          </div>
        </div>

        <p>{data.content}</p>
      </div>

      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default Post;