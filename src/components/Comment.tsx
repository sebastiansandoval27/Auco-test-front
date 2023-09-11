import { Comment } from '@/types/post'
import React from 'react'

interface Props {
  comment: Comment;
}

const Comment = ({
  comment
}:Props) => {
  return (
    <div className='w-[21.875rem] flex flex-col items-start justify-start bg-white border-2 border-slate-300 rounded-md p-2'>
      <h3 className='font-extrabold text-black line-clamp-1'>{comment?.name}</h3>
      <span className='text-xs text-slate-400'>{comment?.email}</span>
      <hr className='w-full border-t-2 border-t-slate-200 my-2' />
      <p className='w-full text-left text-xs text-slate-700'>
        {
          comment?.body
        }
      </p>

    </div>
  )
}

export default Comment