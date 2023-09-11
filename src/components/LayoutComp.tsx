import { useRouter } from 'next/navigation'
import Footer from './Footer'
import Header from './Header'

interface Props {}

const LayoutComp = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden">
      <Header pageTitle="Auco" backgroundColor="light" />
      <div className="w-full flex flex-col items-center justify-start my-2 pb-5 overflow-hidden">
        {children}
        <div
          className="fixed bottom-20 right-4 rounded-full p-2 bg-orange-500 flex justify-center items-center z-50 cursor-pointer"
          onClick={() => router.push('/about')}
        >
          <h3 className="text-white font-extrabold text-lg">Sebastián</h3>
        </div>
      </div>
      <Footer pageFooter="© 2023 - Sebastian Sandoval" />
    </div>
  )
}

export default LayoutComp
