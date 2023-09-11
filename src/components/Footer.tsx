import classnames from 'classnames'
type BackgroundColor = 'dark' | 'light'

interface Props{
  pageFooter: string
  backgroundColor?: BackgroundColor
}

const Footer = ({
  pageFooter,
  backgroundColor = 'dark'
}:Props) => {
  return (
    <div className={classnames([
      'h-14 w-screen flex justify-center items-center fixed bottom-0 border-t-2 border-primary-dark',
      backgroundColor === 'dark' ? 'bg-primary-100' : 'bg-white'
    ])}>
      <div className={
        classnames([
          'font-light',
          backgroundColor === 'dark' ? 'text-white' : 'text-primary-100'
        ])
      }>{pageFooter}</div>
    </div>
  )
}

export default Footer