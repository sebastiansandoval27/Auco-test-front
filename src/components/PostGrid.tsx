'use client';

import { Post } from '@/types/post'
import React from 'react'
import PostComp from './Post'

interface Props {
  posts: Post[]
}
const PostGrid = ({
  posts
}:Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 pb-10'>
    {posts.map(post => (
      <PostComp
        key={post.id}
        body={post.body}
        category={'Tech'}
        image={'/photo1.webp'}
        title={post.title}
        onClick={() => {
          console.log('click', post.id)
        }}
      />
    ))}
  </div>
  )
}

export default PostGrid