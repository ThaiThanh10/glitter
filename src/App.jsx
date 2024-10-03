import { useState } from "react"
import "./App.css"
import { Footer, Header, Reveal } from "./components"
import { Carousel, Modal, notification } from "antd"
import { useWindowSize } from "usehooks-ts"
import emailjs from "@emailjs/browser"

export const Banner = ({ openModal }) => {
  return (
    <section className="bgBanner flex justify-center items-center px-3 flex-col pb-[10%] xs:pt-[10%] ">
      <Reveal>
        <img
          src="/images/Group 12.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[38px] text-center font-medium xs:text-[28px] sm:text-[32px] md:text-[34px] ">
            Comprehensive Web3 GTM Solutions
          </h2>
          <div className="w-[50%] relative xs:w-full sm:w-full md:w-[80%] lg:w-[70%] ">
            {" "}
            <input
              className="text-[20px] rounded-[10px] glass py-[25px] pl-9 text-[#fff] w-full mt-4 xs:py-4 "
              placeholder="Enter Your Email..."
              type="text"
            />{" "}
            <div className="absolute xs:relative sm:relative xs:mt-4 xs:w-full sm:mt-6 sm:mx-auto sm:right-0 right-[2%] top-[26%] flex justify-center items-center  w-max">
              <button
                onClick={openModal}
                className="text-[28px]  font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
              >
                Contact US
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
export const Market = () => {
  const { width } = useWindowSize()
  const data = [
    {
      img: "/images/setting.png",
      title: "CREATE YOUR GTM PLAN",
      text: "Work with us to create custom strategy aligned with your product and timeline, leveraging your teams resources",
    },
    {
      img: "/images/research.png",
      title: "ESTABLISH YOUR STRATEGY",
      text: "Create a GTM plan based on your timeline and goals",
    },
    {
      img: "/images/team.png",
      title: "BUILD YOUR TEAM & EXECUTE",
      text: "Equip the existing team with the resources to execute and support recruitment of resources to fill gaps",
    },
  ]
  return (
    <section
      className={` mt-[80px] overflow-hidden object-contain bg-[left_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
    >
      <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
        <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
          <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
            GO TO MARKET THE RIGHT WAY
          </h2>
        </div>
      </div>
      <div className="container px-0 ">
        <h3 className="text-[40px] font-medium my-[50px] px-4 xs:text-[34px] ">
          Avoid the pitfalls of past project and leverage Web3 successfully
        </h3>
        <Reveal>
          <div className={`" flex justify-around flex-wrap gap-10 px-5 "`}>
            {data.map((item, i) => (
              <div
                key={i}
                className={`" max-w-[30%] relative skew-x-[10deg] xs:skew-x-[0deg] ${width < 1300 && "max-w-full"
                  } "`}
              >
                <img
                  className="float-left absolute top-[-14%] left-[-10%] -skew-x-[10deg] xs:-skew-x-[0deg] z-10 bg-[#000] rounded-full aspect-[1] max-w-[145px] xs:max-w-[130px] p-3 "
                  src={item.img}
                  alt=""
                />
                <div className="bg-gradient-to-r from-[#A73333] to-[#6A41C2]  min-h-[245px] opacity-80 max-w-[100%] px-[72px] py-3 xs:p-7  ">
                  <h4 className="text-[24px] font-extrabold   ml-[17%] xs:ml-[32%] mb-2 max-w-[210px] -skew-x-[10deg] xs:-skew-x-[0deg] ">
                    {item.title}
                  </h4>
                  <p className="text-[20px] max-w-[270px] ml-[7%] -skew-x-[10deg] xs:-skew-x-[0deg] ">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
const Solutions = () => {
  const [current, setCurrent] = useState({
    img: "/images/Rectangle 49.png",
    desc: ["Planing for Success", "Token Launch Strategy", "Resource Planing"],
  })
  const { width } = useWindowSize()
  const data = [
    {
      btn: "Strategic Planing",
      data: {
        img: "/images/Rectangle 49.png",
        desc: ["Planing for Success", "Token Launch Strategy", "Resource Planing"],
      },
    },
    {
      btn: "Reputation & Community Building",
      data: {
        img: "/images/reputation.png",
        desc: ["Demand Generation", "Community Retention"],
      },
    },
    {
      btn: "Partnerships & Networking",
      data: {
        img: "/images/Rectangle 47.png",
        desc: ["Partner Introductions", "Vendor Introductions"],
      },
    },
    {
      btn: "Execution & Growth",
      data: {
        img: "/images/Rectangle 48.png",
        desc: ["Marketing & Campaign Structure", "Building a Team"],
      },
    },
  ]
  return (
    <section
      className={`  overflow-hidden object-contain bg-[left_top_1rem] pb-[120px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
    >
      <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
        <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
          <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
            OUR SOLUTIONS
          </h2>
        </div>
      </div>
      <div
        className={`" container my-[50px] flex items-center justify-around px-3 gap-x-10 ${width < 1140 && "flex-col gap-10"
          } "`}
      >
        <div className="max-w-[40%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full ">
          <Reveal>
            <div>
              {data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(item.data)}
                  className=" cursor-pointer bg-gradient-to-t bgGradient w-full block -skew-x-[20deg] px-3 rounded-[12px] my-6  "
                >
                  <h2 className="text-[28px] font-extrabold text-center  py-4 skew-x-[20deg]">
                    {item.btn}
                  </h2>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="max-w-[55%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
          <Reveal>
            <div
              className={`" flexCenter gap-x-8 rounded-[22px]  bg-gradient-to-b from-[#655AAC] to-[#383066] p-5 -skew-x-[10deg] xs:skew-x-0 md:-skew-x-[6deg] lg:-skew-x-[7deg] sm:-skew-x-[4deg] ${width < 900 && " flex-col "
                } "`}
            >
              <div className="max-w-[30%] overflow-hidden w-[350px] grid place-items-center aspect-[0.6] bg-gradient-to-b from-[#4495AE] to-[#103D80] bg-center bg-no-repeat rounded-[20px] xs:max-w-full sm:max-w-full md:max-w-[50%] lg:max-w-[50%]   ">
                <img
                  className="  skew-x-[10deg] xs:skew-x-0 "
                  src={current.img}
                  alt=""
                />{" "}
              </div>
              <div
                className={`" flex flex-col gap-y-6 items-center justify-center w-full py-10 px-3 ${width < 900 && "flex-col "
                  } "`}
              >
                {current.desc.map((item, i) => (
                  <div
                    key={i}
                    className=" text-center  bg-gradient-to-b from-[#444] to-[#222] w-full block -skew-x-[20deg]  rounded-[12px]   "
                  >
                    <h2 className="text-[26px] font-extrabold  py-3 skew-x-[28deg] xs:skew-x-[20deg]">
                      {item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const FormModal = ({ isModalOpen, closeModal, openModal }) => {
  const [form, setForm] = useState({ to_email: "", to_name: "", phone: "", message: "" })
  const [api, contextHolder] = notification.useNotification()
  const openNotification = () => {
    api.success({
      message: `Your email has been successfully sent!`,
      description:
        "Thank you for reaching out to us! We have received your information and will get back to you as soon as possible. Have a great day!",
      placement: "top",
      showProgress: true,
      pauseOnHover: false,
    })
  }
  const showModal = () => {
    openModal()
  }
  const handleCancel = () => {
    closeModal()
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value })
  }
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .send("service_tbtu6gz", "template_px3v1v9", form, {
        publicKey: "_0vDoYIcXTuDIU7TW",
      })
      .then(
        () => {
          handleCancel()
          openNotification()
          setForm({ to_email: "", to_name: "", phone: "", message: "" })
        },
        (error) => {
          console.log("FAILED...", error)
        }
      )
  }

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      {" "}
      {contextHolder}
      <div className="flex flex-col gap-5 px-10 py-10 rounded-[20px] relative ">
        {" "}
        <div className="absolute top-0 left-0 stripesModal w-full h-[40px] rounded-[20px_20px_0_0]"></div>
        <div className="absolute bottom-[0%] left-0 stripesModal w-full h-[40px] "></div>
        <h2 className="text-[40px] font-extrabold text-[#fff] ">CONTACT US</h2>
        <form className="w-full">
          <input
            onChange={handleChange}
            name="to_name"
            value={form.to_name}
            className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
            type="text"
            placeholder="Your Name"
          />
          <input
            onChange={handleChange}
            name="to_email"
            value={form.to_email}
            className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
            type="text"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            name="phone"
            value={form.phone}
            className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
            type="tel"
            placeholder="Phone Number"
          />
          <textarea
            onChange={handleChange}
            name="message"
            value={form.message}
            className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
            type="text"
            rows={5}
            placeholder="Message"
          />
        </form>
        <div className="flex justify-end pb-5 ">
          <button
            onClick={sendEmail}
            className="text-[26px]  text-[#fff] w-max font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
          >
            SEND NOW
          </button>
        </div>
      </div>
    </Modal>
  )
}

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
          <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            <a
              target="_blank"
              href="https://x.com/Tvalc"
            >
              {" "}
              <img
                className="-skew-x-[8deg] w-[56px] aspect-[1] xs:w-[30px] sm:w-[35px] md:w-[40px] "
                src="/images/X.svg"
                alt=""
              />
            </a>
          </button>
          <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            <a
              target="_blank"
              href="https://t.me/vman1234"
            >
              <img
                className="-skew-x-[8deg] w-[56px] aspect-[1] xs:w-[30px] sm:w-[35px] md:w-[40px] "
                src="/images/telegram.svg"
                alt=""
              />
            </a>
          </button>
        </div>
        <button
          onClick={scrollToTop}
          className="rounded-full bg-gradient-to-b from-[#752292] to-[#B978D0]   transition-all duration-300 hover:translate-y-[-2px]  hover:shadow-[0px_6px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          <img
            className={`${width < 700 && "w-[60px]"}`}
            src="/images/Group 136.png"
            alt=""
          />
        </button>
      </div>
      <Header openModal={openModal} />
      <main>
        <Banner openModal={openModal} />
        <Market />
        <Solutions />
        <section
          className={`  overflow-hidden object-contain bg-[right_top_1rem] pb-[110px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
                HOW WE WORK
              </h2>
            </div>
          </div>

          <div className="container my-[50px] flex justify-around xs:flex-col sm:flex-col md:flex-col lg:flex-col md:max-w-full xl:max-w-full 2xl:max-w-full ">
            <div className={`" max-w-[45%] px-3 ${width < 990 && "max-w-full"} "`}>
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-5  ">
                  <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg]">
                    Fractional CMO
                  </h2>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                  <img
                    src="/images/Ellipse 11.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Get our whole team and bring GlitterCloud in as a Fractional
                    CMO
                  </p>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 my-7 ">
                  <img
                    src="/images/Ellipse 12.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Full audit of how your Marketing engine aligns with Company
                    OKRs
                  </p>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                  <img
                    src="/images/Ellipse 13.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Goal Review, Resource Audit, Hiring Support, Strategy Docs,
                    etc - We help build your engine
                  </p>
                </div>
              </Reveal>
            </div>
            <div className={`" max-w-[45%] px-3 ${width < 990 && "max-w-full"} "`}>
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient w-full  -skew-x-[40deg]  rounded-[12px] my-5  ">
                  <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg]">
                    Advisory
                  </h2>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                  <img
                    src="/images/Ellipse 14.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Bring our brain to your team via bi-weekly strategy calls.
                    dedicated communication channel and async review of key docs
                  </p>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 my-7 ">
                  <img
                    src="/images/Ellipse 15.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Vote of confidence via our network. Introductions for
                    conferences to get you connected to the right people
                  </p>
                </div>
                <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                  <img
                    src="/images/Ellipse 16.png"
                    alt=""
                  />
                  <p className="text-[24px]">
                    Introductions to the right vendors to help you avoid
                    pitfalls of prior projects
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {/* THE FRACTIONAL CMO    */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
                Fractional CMO
              </h2>
            </div>
          </div>
          <div
            className={`" px-7 my-[50px] flex justify-center gap-x-8 flex-wrap ${width > 1300 && "flex-nowrap"
              } ${width < 1300 && width > 800 && "grid grid-cols-2 items-start"} ${width < 1300 && "flex-col gap-8 items-start"
              } "`}
          >
            <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full  ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                    Review Goals & Resources
                  </h2>
                </div>
                <ul className="mt-4 list-disc list-inside ">
                  <li className="text-[18px] my-3 ">Existing Goals</li>
                  <li className="text-[18px] my-3 ">
                    Internal & External Resources
                  </li>
                  <li className="text-[18px] my-3 ">Product Roadmap</li>
                  <li className="text-[18px] my-3 ">Investor Expectations</li>
                  <li className="text-[18px] my-3 ">
                    Leadership & Product Alignment
                  </li>
                </ul>
              </Reveal>
            </div>
            <img
              className={`" mt-10 h-[32px] ${width < 1300 && "hidden"} "`}
              src="/images/Group 118.png"
              alt=""
            />
            <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                    Reset Goals
                  </h2>
                </div>
                <ul className="mt-4 list-disc list-inside ">
                  <li className="text-[18px] my-3 ">
                    New Goals in context of Project Reality
                  </li>
                  <li className="text-[18px] my-3 ">
                    Existing Resources + Identified Gaps
                  </li>
                  <li className="text-[18px] my-3 ">
                    Investor Expectations vs Product Roadmap
                  </li>
                </ul>
              </Reveal>
            </div>
            <img
              className={`" mt-10 h-[32px] ${width < 1300 && "hidden"} "`}
              src="/images/Group 118.png"
              alt=""
            />
            <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                    Strategy & Implementation
                  </h2>
                </div>
                <ul className="mt-4 list-disc list-inside ">
                  <li className="text-[18px] my-3 ">Strategy Documentation</li>
                  <li className="text-[18px] my-3 ">
                    Timeline for Early Access, TGE, Full Release, Monetization.
                    etc
                  </li>
                  <li className="text-[18px] my-3 ">Resource Planing</li>
                  <li className="text-[18px] my-3 ">
                    Internal Processes for Vendor & Partnership Management
                  </li>
                </ul>
              </Reveal>
            </div>
            <img
              className={`" mt-10 h-[32px] ${width < 1300 && "hidden"} "`}
              src="/images/Group 118.png"
              alt=""
            />

            <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                    Stay the Course
                  </h2>
                </div>
                <ul className="mt-4 list-disc list-inside ">
                  <li className="text-[18px] my-3 ">Bi-Weekly Meetings</li>
                  <li className="text-[18px] my-3 ">
                    Consistent Review of Upcoming Planning
                  </li>
                  <li className="text-[18px] my-3 ">
                    Dedicated Channels for Brainstorming
                  </li>
                  <li className="text-[18px] my-3 ">
                    Continued network support and vendor/partner introductions
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
        {/* Advisor */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
                THE ADVISOR
              </h2>
            </div>
          </div>

          <div
            className={`"  my-[80px] flex justify-evenly flex-wrap gap-10 ${width < 900 && "flex-col px-5 items-center"
              } "`}
          >
            <div className=" max-w-[30%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] xl:max-w-[75%] ">
              <Reveal>
                <div className="   bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold   skew-x-[15deg]">
                    BRAIN
                  </h2>
                </div>
                <ul className="list-disc list-inside ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid ">
                  <li className="text-[18px] my-3 ">Regular Calls</li>
                  <li className="text-[18px] my-3 ">
                    Dedicated Communication Channels
                  </li>
                  <li className="text-[18px] my-3 ">
                    Async Feedback on Strategy
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className=" max-w-[30%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] xl:max-w-[75%] ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold   skew-x-[15deg]">
                    NETWORK
                  </h2>
                </div>
                <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                  <li className="text-[18px] my-3 ">Conference support</li>
                  <li className="text-[18px] my-3 ">Vendor Introductions</li>
                  <li className="text-[18px] my-3 ">
                    Alumni Network of GC Projects
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className=" max-w-[30%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] xl:max-w-[75%] ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                  <h2 className="text-[30px] font-bold   skew-x-[15deg]">
                    LIFETIME SUPPORT
                  </h2>
                </div>
                <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                  <li className="text-[18px] my-3 py-3 ">Fundraising Support</li>
                  <li className="text-[18px] my-3 py-2 ">
                    Your success is our success
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg] xs:pl-5 xs:text-[30px] ">
                SAMPLE TIMELINE
              </h2>
            </div>
          </div>

          <div className="container text-[34px] text-center my-8 ">
            <h3 className=" xs:text-left sm:text-left md:text-left ">
              Optimization, Performance Tracking & Reporting
            </h3>
            <Reveal delay={0.5}>
              <Carousel
                draggable={true}
                infinite={false}
              >
                <div>
                  <div>
                    <h4 className="text-[60px] text-[#F19BFF] font-extrabold flex items-center gap-x-10 pl-[120px] xs:pl-2 xs:text-[42px] sm:pl-3 md:pl-0 md:block lg:block lg:pl-0 xl:pl-10 ">
                      WEEK 1-2
                      <img
                        className={`" max-w-[70%]  h-[25px] xl:max-w-[60%] 2xl:max-w-[60%] ${width < 1000 ? "w-0" : "w-full"
                          } "`}
                        src="/images/Line 25.png"
                        alt=""
                      />
                    </h4>
                    <div
                      className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] max-w-full "
                        } "`}
                    >
                      <img
                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] md:max-w-[90%] "
                        src="/images/Rectangle 42.png"
                        alt=""
                      />
                      <div className="text-left px-5 pb-7 ">
                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] ">
                          Strategy Development & Planning Deliverables
                          <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                            GTM Plan and Framework
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Resource & Budget Requirements
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Identify Potential Pitfalls
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mx-4">
                    <h4 className="text-[60px] text-[#9BDBFF] font-extrabold flex items-center gap-x-10 pl-[120px] xs:pl-2 xs:text-[42px] sm:pl-3 md:pl-0 md:block lg:block lg:pl-0 xl:pl-10 ">
                      WEEK 3-4
                      <img
                        className={`" max-w-[70% h-[25px] xl:max-w-[60%] 2xl:max-w-[60%] ${width < 1000 ? "w-0" : "w-[70%]"
                          } "`}
                        src="/images/Line 25.png"
                        alt=""
                      />
                    </h4>
                    <div
                      className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] "
                        } "`}
                    >
                      <img
                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] "
                        src="/images/Rectangle 42.png"
                        alt=""
                      />
                      <div className="text-left px-5 pb-7 ">
                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] ">
                          Vendor Evaluation & Selection
                          <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                            Resources Requirements Aligned
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Creative Pipeline Established
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Existing Resource Audit Complered
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h4 className="text-[60px] text-[#9BDBFF] font-extrabold text-center mb-2 xs:text-[42px]  ">
                      MONTHS 2-3
                    </h4>
                    <div
                      className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] "
                        } "`}
                    >
                      <img
                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] "
                        src="/images/Rectangle 42.png"
                        alt=""
                      />
                      <div className="text-left px-5 pb-7 ">
                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] ">
                          Campaign Setup, Influencer Recruitment &
                          Community Building
                          <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                            Core team process established
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Implementation of GTM
                          </li>
                          <li className="text-white text-[24px] xs:text-[20px] ">
                            Completion of team and GC transitions out
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Reveal>
          </div>
        </section>
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
                COMPENSATION
              </h2>
            </div>
          </div>

          <div
            className={`" container mt-[80px] flex justify-around gap-y-9  ${width < 1200 && "flex-col items-center"
              } ${width < 600 && "max-w-full"} "`}
          >
            <div className={`" max-w-[45%] ${width < 1200 && "max-w-full"} "`}>
              <Reveal>
                <div className="flex items-center gap-x-3 ">
                  <h3 className="text-[40px] font-extrabold text-[#BF4AF6]">
                    FLEXIBLE
                  </h3>
                  <span className="block w-full h-[3px] bg-[#A04AF6] "></span>
                </div>
                <p className="text-[30px]">
                  We accept crypto and fiat, and work with teams to meet them
                  where they’re financially. If you’re raising a round, we’ll
                  defer payment until you have money
                </p>
                <img
                  className="my-3"
                  src="/images/Group 59 (1).png"
                  alt=""
                />
                <div className="flex items-center gap-x-3 ">
                  <h3 className="text-[40px] font-extrabold text-[#BF4AF6]">
                    CUSTOM
                  </h3>
                  <span className="block w-full h-[3px] bg-[#A04AF6] "></span>
                </div>
                <p className="text-[30px]">
                  We accept Token and Equity grants as mechanisms to align
                  incentives with the teams we work with so that your success is
                  our success
                </p>
              </Reveal>
            </div>
            <div
              className={`" max-w-[45%]  ${width < 1200 && width > 600 && "max-w-full"
                } ${width < 600 && "max-w-full overflow-hidden "} "`}
            >
              <Reveal>
                <div className="flex bg-[#752EAC] h-max w-max rounded-[30px]">
                  <video
                    className="border-[16px] border-[#752EAC] rounded-[30px_0_0_30px] max-h-[420px] "
                    width={width < 600 ? "320" : "420"}
                    height="420"
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src="/images/pacman-namco.gif.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="flex justify-between items-center flex-col max-h-[420px] -ml-[1px] bg-[#752EAC] py-4 pl-2 pr-6 rounded-[0_30px_30px_0] ">
                    <img
                      src="/images/btnTv.png"
                      alt=""
                    />
                    <img
                      src="/images/Group 67.png"
                      alt=""
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter overflow-hidden  relative w-screen stripes ">
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg]   ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg]">
                JOIN THE GLITTERCLOUD FAMILY
              </h2>
            </div>
          </div>

          <div className=" mt-[80px] px-5 flex justify-around items-center flex-wrap gap-y-8 xs:flex-col sm:flex-col md:flex-col ">
            <img
              className=" max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
              src="/images/Rectangle 29.jpg"
              alt=""
            />

            <img
              className="max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
              src="/images/Group 51.jpg"
              alt=""
            />
            <img
              className="max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
              src="/images/Group 52.jpg"
              alt=""
            />
            <img
              className="max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
              src="/images/Group 47.jpg"
              alt=""
            />
            <img
              className="max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
              src="/images/Group 49.jpg"
              alt=""
            />
          </div>
        </section>
        <section
          className={`" container flex justify-around items-center gap-x-20 pb-[120px] ${width < 1070 ? "flex-col gap-y-10 " : ""
            } "`}
        >
          <div
            className={`" xl:max-w-[41%] flex justify-center items-center flex-col gap-y-3 lg:max-w-[60%] ${width < 770 ? "max-w-full " : ""
              } "`}
          >
            <Reveal>
              <img
                src="/images/TonyValcarcel.png"
                alt=""
              />
              <div className="  bg-gradient-to-t bgGradient w-full text-center skew-x-[40deg] rounded-[12px]   ">
                <h2 className="text-[42px] font-extrabold  -skew-x-[40deg] xs:text-[32px] sm:text-[32px] xl:text-[36px] ">
                  TONY VALCARCEL
                </h2>
              </div>
              <p className="text-[34px] text-center mt-3 xs:text-[28px] xl:text-[30px] ">
                Founder of GlitterCloud
              </p>
            </Reveal>
          </div>
          <div className={`" max-w-[55%] ${width < 1070 ? "max-w-full " : ""} "`}>
            <div className="border-b border-[#fff] border-solid pb-8 mb-8 ">
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                  <h2
                    className={`" text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg] ${width < 770 ? "mb-10 " : ""
                      } "`}
                  >
                    OUR EXPERIENCE
                  </h2>
                </div>
                <div className="flex justify-around items-center gap-6 flex-wrap mt-4 ">
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/Amazon_logo.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/Twitch-logo.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/Nintendo_logo.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/ea-sport-logo.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/Group 17.svg"
                    alt=""
                  />
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                  <h2 className="text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg]">
                    OUR CLIENTS
                  </h2>
                </div>
                <div className="flex justify-around items-center gap-6 flex-wrap mt-4 ">
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/SPARKBALL_LOGO.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/MACS.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/Vector.svg"
                    alt=""
                  />
                  <img
                    className="xl:max-w-[30%] 2xl:max-w-[37%] "
                    src="/images/image 3.svg"
                    alt=""
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer openModal={openModal} />
    </div>
  )
}

export default App
