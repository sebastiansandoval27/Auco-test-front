import { Post } from '@/types/post';
import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetPosts = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
        setPosts(response?.data || []);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return {
    posts,
    isLoading
  }
}

export default useGetPosts