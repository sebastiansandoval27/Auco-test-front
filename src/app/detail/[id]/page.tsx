'use client'

import Comment from '@/components/Comment'
import CommentsGrid from '@/components/CommentGrid'
import LayoutComp from '@/components/LayoutComp'
import Loader from '@/components/Loader'
import Post from '@/components/Post'
import useGetPost from '@/hooks/useGetPost'
import { useEffect } from 'react'

interface DetailProps {
  id: string
}
const Detail = ({ params }: { params: { id: string } }) => {
  const {
    post: data,
    isLoading,
    comments,
  } = useGetPost({
    id: params?.id,
  })

  return (
    <LayoutComp>
      <Post
        body={data?.body}
        title={data?.title}
        category="Tech"
        image="/photo1.webp"
        onClick={() => {}}
      />
      <div className="mt-2 flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto pb-5">
        <h3 className="text-black font-extrabold text-lg text-left">
          Comentarios
        </h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full mt-3">
            <CommentsGrid comments={comments} />
          </div>
        )}
      </div>
    </LayoutComp>
  )
}

export default Detail
