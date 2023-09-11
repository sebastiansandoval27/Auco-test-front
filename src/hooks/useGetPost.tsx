import { Comment, Post } from '@/types/post';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useToast from './useToast';

interface Props {
  id: string
}

const useGetPost = ({
  id
}:Props) => {

  const [post, setPost] = useState<Post>({} as Post);
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const {
    showErrorToast,
    toaster
  } = useToast()

  const getPost = async () => {
    try {
      const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(response?.data || []);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      showErrorToast('Error al obtener el post')
    } finally {
      setIsLoading(false)
    }
  };

  const getComments = async (id:number) => {
    try {
      const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(response?.data || []);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      showErrorToast('Error al obtener los comentarios')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getPost();
    getComments(Number(id))
  }, [id]);

  return {
    post,
    isLoading,
    comments,
    toaster
  }
}

export default useGetPost