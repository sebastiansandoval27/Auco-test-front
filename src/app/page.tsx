'use client';

import Layout from '@/components/LayoutComp'
import axios from 'axios'
import PostGrid from '@/components/PostGrid'
import React, { useEffect, useState } from 'react'
import { Post } from '@/types/post';
import Loader from '@/components/Loader';
import useGetPosts from '@/hooks/useGetPosts';
import PostComp from '@/components/Post';

const Home = () => {
  const {
    posts: data,
    isLoading
  } = useGetPosts()

  return (
    <Layout>
      <div className='w-full mt-3'>
        {
          isLoading ? <Loader /> : (
              <PostGrid posts={data} />
            )
          }
        {
          data.length === 0 && !isLoading && <div className="text-center text-2xl text-gray-500">No posts found</div>
        }
      </div>
    </Layout>
  )
}

export default Home
