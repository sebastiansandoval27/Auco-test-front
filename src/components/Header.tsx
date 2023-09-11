import classnames from 'classnames'
type BackgroundColor = 'dark' | 'light'

interface Props{
  pageTitle: string
  backgroundColor?: BackgroundColor
}

const Header = ({
  pageTitle,
  backgroundColor = 'dark'
}:Props) => {
  return (
    <div className={classnames([
      'h-14 w-screen flex justify-center items-center',
      backgroundColor === 'dark' ? 'bg-primary-100' : 'bg-white'
    ])}>
      <div className={
        classnames([
          'text-2xl font-extrabold uppercase',
          backgroundColor === 'dark' ? 'text-white' : 'text-primary-100'
        ])
      }>{pageTitle}</div>
    </div>
  )
}

export default Header