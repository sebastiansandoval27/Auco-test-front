'use client'

import Image from 'next/image'
import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type BackgroundColor = 'dark' | 'light'
interface Props {
  pageTitle: string
  backgroundColor?: BackgroundColor
}

const Header = ({ pageTitle, backgroundColor = 'light' }: Props) => {
  const router = useRouter()

  return (
    <div
      className={classnames([
        'h-14 w-screen flex justify-center items-center',
        backgroundColor === 'dark' ? 'bg-primary-100' : 'bg-white',
        'shadow-lg',
      ])}
    >
      <div
        className={classnames([
          'text-2xl font-extrabold uppercase flex justify-center items-center gap-2 w-full px-4 lg:w-3/4',
          backgroundColor === 'dark' ? 'text-white' : 'text-primary-100',
        ])}
        onClick={() => {
          router.push('/')
        }}
      >
        <div className="w-[7.5rem] h-[3.125rem] flex justify-center items-center relative p-2 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            sizes="100vw"
          />
        </div>      
      </div>
    </div>
  )
}

export default Header
