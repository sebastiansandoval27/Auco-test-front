import Image from 'next/image'
import classnames from 'classnames'

type BackgroundColor = 'dark' | 'light'
interface Props{
  pageTitle: string
  backgroundColor?: BackgroundColor
}

const Header = ({
  pageTitle,
  backgroundColor = 'light'
}:Props) => {
  return (
    <div className={classnames([
      'h-14 w-screen flex justify-center items-center',
      backgroundColor === 'dark' ? 'bg-primary-100' : 'bg-white',
      'shadow-lg'
    ])}>
      <div className={
        classnames([
          'text-2xl font-extrabold uppercase',
          backgroundColor === 'dark' ? 'text-white' : 'text-primary-100'
        ])
      }>
        <Image src="/logo.png" alt="Logo" width={120} height={50} />
      </div>
    </div>
  )
}

export default Header