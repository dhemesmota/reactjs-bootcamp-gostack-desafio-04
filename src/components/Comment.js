import React from 'react'

import './Comment.css'

function Comment({ data }) {
  return (
    <div id="comment">
      <img src={data.author.avatar} alt={data.author.name}/>
      <div>
        <strong>{data.author.name}</strong>
        {data.content}
      </div>
    </div>
  )
}

export default Comment;