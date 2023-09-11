import Header from "./Header"

interface Props {

}

const LayoutComp = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-screen flex flex-col items-center justify-start">
      <Header pageTitle="Auco" />
    </div>
  )
}

export default LayoutComp