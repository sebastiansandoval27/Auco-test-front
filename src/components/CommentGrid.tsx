'use client';

import React from 'react'
import Comment from './Comment';
import './CommentGrid.css'

interface Props {
  comments: Comment[]
}
const CommentsGrid = ({
  comments
}:Props) => {

  return (
    <div className='grid-comment'>
    {comments.map(comment => (
      <Comment
        key={comment?.id}
        comment={comment}
      />
    ))}
  </div>
  )
}

export default CommentsGrid