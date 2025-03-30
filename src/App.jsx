import { useState } from "react"
import "./App.css"
import { Footer, Header, Reveal, FormModal, Title } from "./components"
import { useWindowSize } from "usehooks-ts"
import Homepage from "./pages/Homepage/Homepage"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { width } = useWindowSize()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative overflow-hidden">
      <FormModal
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <div className="h-[80vh] fixed top-[13%] right-[5%] flex justify-between items-end flex-col z-[99] ">
        <div className=" flex items-center flex-col gap-y-4 ">
          <a
            target="_blank"
            href="https://x.com/Tvalc"
            aria-label="Twitter"
            className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            <img
              className="-skew-x-[8deg] w-[56px] aspect-[1] xs:w-[30px] sm:w-[35px] md:w-[40px] "
              src="/images/X.svg"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://t.me/vman1234"
            aria-label="Telegram"
            className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            <img
              className="-skew-x-[8deg] w-[56px] aspect-[1] xs:w-[30px] sm:w-[35px] md:w-[40px] "
              src="/images/telegram.svg"
              alt=""
            />
          </a>
        </div>
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="rounded-full bg-gradient-to-b from-[#752292] to-[#B978D0]   transition-all duration-300 hover:translate-y-[-2px]  hover:shadow-[0px_6px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          <img
            className={`${width < 700 && "w-[60px]"}`}
            src="/images/Group 136.svg"
            alt=""
          />
        </button>
      </div>
      <Header openModal={openModal} />
      <main>
        <Homepage
          width={width}
          openModal={openModal}
        />
      </main>
      <Footer openModal={openModal} />
    </div>
  )
}

export default App
