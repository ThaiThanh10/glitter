import { useState } from "react"
import "./App.css"
import { Header } from "./components"

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="bgBanner flex justify-center items-center  flex-col pb-[10%] " >
          <img src="/images/Group 12.png" alt="" />
          <div className="flex flex-col justify-center items-center" >
            <h2 className="text-[38px] font-medium " >Comprehensive Web3 GTM Solutions</h2>
            <input className="text-[20px] rounded-[10px] bg-[#fff] backdrop-blur-sm py-[25px] pl-9 text-[#000] w-[70%] " placeholder="Enter Your Email..." type="text" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
