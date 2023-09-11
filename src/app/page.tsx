'use client';

import Layout from '@/components/LayoutComp'
import axios from 'axios'
import PostGrid from '@/components/PostGrid'
import React, { useEffect, useState } from 'react'
import { Post } from '@/types/post';
import Loader from '@/components/Loader';

const Home = () => {

  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setData(response?.data || []);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {
        isLoading ? <Loader /> : <PostGrid posts={data} />
      }
      {
        data.length === 0 && !isLoading && <div className="text-center text-2xl text-gray-500">No posts found</div>
      }
    </Layout>
  )
}

export default Home
