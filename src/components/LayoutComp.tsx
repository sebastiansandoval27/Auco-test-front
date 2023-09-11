import Footer from './Footer'
import Header from './Header'

interface Props {}

const LayoutComp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen flex flex-col items-center justify-start">
      <Header pageTitle="Auco" backgroundColor="light" />
      <div className="w-full flex flex-col items-center justify-start my-2 pb-5">
        {children}
      </div>
      <Footer pageFooter="© 2023 - Sebastian Sandoval" />
    </div>
  )
}

export default LayoutComp
