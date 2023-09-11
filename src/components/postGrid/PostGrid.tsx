'use client'

import { Post } from '@/types/post'
import React from 'react'
import PostComp from '../Post'
import { useRouter } from 'next/navigation'
import './postGrid.css'

interface Props {
  posts: Post[]
}
const PostGrid = ({ posts }: Props) => {
  const router = useRouter()

  return (
    <div className="grid-temp">
      {posts.map(post => (
        <PostComp
          key={post?.id}
          body={post?.body}
          category={'Tech'}
          image={'/photo1.webp'}
          title={post?.title}
          onClick={() => {
            router.push(`/detail/${post?.id}`)
          }}
        />
      ))}
    </div>
  )
}

export default PostGrid
