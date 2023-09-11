'use client';
import Image from 'next/image'

interface Props {
  title: string
  body: string
  category: string
  image: string
  onClick: () => void
}

const Post = ({ title, body, category, image, onClick }: Props) => {
  return (
    <article className="w-[21.875rem] h-[18.75rem] bg-white rounded-md overflow-hidden cursor-pointer"
    onClick={(onClick)}
    >
      <div className="w-[21.875rem] h-[9.0625rem] overflow-hidden relative">
        <Image src={image} alt={`Post image`} fill priority={true} sizes='100%' />
      </div>
      <div className="w-full px-1 py-3">
        <p className="w-full rounded-md px-3 py-1 text-primary-dark bg-slate-200">{category}</p>
        <h3 className="text-black font-extrabold text-md uppercase mt-2 line-clamp-1">{title}</h3>
        <p className="text-slate-600 text-xs mt-1 line-clamp-5">{body}</p>
      </div>
      <hr className='w-full h-2' />
    </article>
  )
}

export default Post
