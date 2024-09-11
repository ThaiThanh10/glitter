import { useState } from "react"
import "./App.css"
import { Footer, Header, Reveal, } from "./components"

export const Banner = () => {
  return (
    <section className="bgBanner flex justify-center items-center  flex-col pb-[10%] ">
      <Reveal>
        <img
          src="/images/Group 12.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[38px] font-medium ">Comprehensive Web3 GTM Solutions</h2>
          <input
            className="text-[20px] rounded-[10px] glass py-[25px] pl-9 text-[#fff] w-[60%] "
            placeholder="Enter Your Email..."
            type="text"
          />
        </div>
      </Reveal>
    </section>
  )
}
export const Market = () => {
  return (
    <section
      className={` mt-[80px] overflow-hidden object-contain bg-[left_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
    >
      <div className=" flexCenter gap-x-5  ">
        <div className=" container bg-gradient-to-t bgGradient w-full block skew-x-[40deg] max-h-[66px]  ">
          <h2 className="text-[36px] font-extrabold pl-10 pt-3 -skew-x-[40deg]">
            GO TO MARKET THE RIGHT WAY
          </h2>
        </div>
      </div>
      <div className="container ">
        <h3 className="text-[40px] font-medium my-[50px] ">
          Avoid the pitfalls of past project and leverage Web3 successfully
        </h3>
        <div className="flex justify-center">
          <div className="max-w-[30%] relative  ">
            <img
              className="float-left absolute top-[-10%] left-[-10%]  z-10 "
              src="/images/setting.png"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#A73333] to-[#6A41C2] box  opacity-80 max-w-[100%] px-[72px] py-3   ">
              <h4 className="text-[24px] font-extrabold  mx-auto mb-2 max-w-[210px] ">
                CREATE YOUR GTM PLAN
              </h4>
              <p className="text-[20px] max-w-[270px] ">
                Work with us to create custom strategy aligned with your product and
                timeline, leveraging your teams resources
              </p>
            </div>
          </div>
          <div className="max-w-[30%] relative  ">
            <img
              className="float-left absolute top-[-10%] left-[-10%]  z-10 "
              src="/images/research.png"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#A73333] to-[#6A41C2] box  opacity-80 max-w-[100%] px-[72px] pt-3  pb-[82px] ">
              <h4 className="text-[24px] font-extrabold  mx-auto mb-2 max-w-[210px] ">
                ESTABLISH YOUR STRATEGY
              </h4>
              <p className="text-[20px] max-w-[270px] pt-6 ">
                Create a GTM plan based on your timeline and goals
              </p>
            </div>
          </div>
          <div className="max-w-[30%] relative  ">
            <img
              className="float-left absolute top-[-10%] left-[-10%]  z-10 "
              src="/images/team.png"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#A73333] to-[#6A41C2] box  opacity-80 max-w-[100%] px-[72px] pt-3 pb-[42px]  ">
              <h4 className="text-[24px] font-extrabold  mx-auto mb-2 max-w-[210px] ">
                BUILD YOUR TEAM & EXECUTE
              </h4>
              <p className="text-[20px] max-w-[270px] ">
                Equip the existing team with the resources to execute and support
                recruitment of resources to fill gaps
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center -mt-3 relative z-10 ">
          <img
            src="/images/Frame 3.png"
            alt=""
          />
          <img
            src="/images/Frame 3.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export const Solutions = () => {
  return (
    <section
      className={`  overflow-hidden object-contain bg-[left_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
    >
      <div className=" flexCenter gap-x-5  ">
        <div className=" container bg-gradient-to-t bgGradient w-full block skew-x-[40deg] max-h-[66px]  ">
          <h2 className="text-[36px] font-extrabold pl-10 pt-3 -skew-x-[40deg]">
            OUR SOLUTIONS
          </h2>
        </div>
      </div>
      <div className="container my-[50px] flex items-center justify-around ">
        <div className="max-w-[40%]  ">
          <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-4  ">
            <h2 className="text-[28px] font-extrabold text-center px-3 py-4 skew-x-[40deg]">
              Strategic Planing
            </h2>
          </div>
          <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-4  ">
            <h2 className="text-[28px] font-extrabold text-center px-3 py-4 skew-x-[40deg]">
              Reputation & Community Building
            </h2>
          </div>
          <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-4  ">
            <h2 className="text-[28px] font-extrabold text-center px-3 py-4 skew-x-[40deg]">
              Partnerships & Networking
            </h2>
          </div>
          <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-4  ">
            <h2 className="text-[28px] font-extrabold text-center px-3 py-4 skew-x-[40deg]">
              Execution & Growth
            </h2>
          </div>
        </div>
        <div className=" flexCenter gap-x-8 rounded-[22px] max-w-[55%] bg-gradient-to-b from-[#655AAC] to-[#383066] p-5 -skew-x-[15deg] ">
          <div className="max-w-[25%]">
            <img
              className=" min-h-[330px]  "
              src="/images/Rectangle 46.png"
              alt=""
            />{" "}
          </div>
          <div className="flex flex-col gap-y-6 items-center justify-center w-full py-10 ">
            <div className=" text-center  bg-gradient-to-b from-[#444] to-[#222] w-full block -skew-x-[25deg]  rounded-[12px]   ">
              <h2 className="text-[26px] font-extrabold  py-3 skew-x-[30deg]">
                Planing for Success
              </h2>
            </div>
            <div className=" text-center  bg-gradient-to-b from-[#444] to-[#222] w-full block -skew-x-[25deg]  rounded-[12px]   ">
              <h2 className="text-[26px] font-extrabold  py-3 skew-x-[30deg]">
                Token Launch Strategy
              </h2>
            </div>
            <div className=" text-center  bg-gradient-to-b from-[#444] to-[#222] w-full block -skew-x-[25deg]  rounded-[12px]   ">
              <h2 className="text-[26px] font-extrabold  py-3 skew-x-[30deg]">
                Resource Planing
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Market />
        <Solutions />
        <section
          className={`  overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" flexCenter gap-x-5  ">
            <div className=" container bg-gradient-to-t bgGradient w-full block skew-x-[40deg] max-h-[66px]  ">
              <h2 className="text-[36px] font-extrabold pl-10 pt-3 -skew-x-[40deg]">
                HOW WE WORK
              </h2>
            </div>
          </div>
          <div className="container my-[50px] flex justify-around ">
            <div className="max-w-[45%]">
              <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg]  rounded-[12px] my-5  ">
                <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg]">
                  Fractional CMO
                </h2>
              </div>
              <div className="flex items-center gap-x-6 ">
                <img
                  src="/images/Ellipse 11.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Get our whole team and bring GlitterCloud in as a Fractional CMO
                </p>
              </div>
              <div className="flex items-center gap-x-6 my-7 ">
                <img
                  src="/images/Ellipse 12.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Full audit of how your Marketing engine aligns with Company OKRs
                </p>
              </div>
              <div className="flex items-center gap-x-6 ">
                <img
                  src="/images/Ellipse 13.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Goal Review, Resource Audit, Hiring Support, Strategy Docs, etc
                  - We help build your engine
                </p>
              </div>
            </div>
            <div className="max-w-[45%]">
              <div className="  bg-gradient-to-t bgGradient w-full  -skew-x-[40deg]  rounded-[12px] my-5  ">
                <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg]">
                  Advisory
                </h2>
              </div>
              <div className="flex items-center gap-x-6 ">
                <img
                  src="/images/Ellipse 14.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Bring our brain to your team via bi-weekly strategy calls.
                  dedicated communication channel and async review of key docs
                </p>
              </div>
              <div className="flex items-center gap-x-6 my-7 ">
                <img
                  src="/images/Ellipse 15.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Vote of confidence via our network. Introductions for
                  conferences to get you connected to the right people
                </p>
              </div>
              <div className="flex items-center gap-x-6 ">
                <img
                  src="/images/Ellipse 16.png"
                  alt=""
                />
                <p className="text-[24px]">
                  Introductions to the right vendors to help you avoid pitfalls of
                  prior projects
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* THE FRACTIONAL CMO    */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" container bg-gradient-to-t bgGradient w-full  skew-x-[40deg]   ">
            <h2 className="text-[36px] font-extrabold pl-10 py-3 -skew-x-[40deg]">
              THE FRACTIONAL CMO
            </h2>
          </div>
          <div className="container my-[50px] flex justify-between ">
            <div className=" max-w-[20%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                  Review Goals & Resources
                </h2>
              </div>
              <ul className="mt-4 list-disc list-inside ">
                <li className="text-[18px] my-3 ">Existing Goals</li>
                <li className="text-[18px] my-3 ">Internal & External Resources</li>
                <li className="text-[18px] my-3 ">Product Roadmap</li>
                <li className="text-[18px] my-3 ">Investor Expectations</li>
                <li className="text-[18px] my-3 ">
                  Leadership & Product Alignment
                </li>
              </ul>
            </div>
            <img
              className=" mt-10 h-[32px]"
              src="/images/Group 118.png"
              alt=""
            />
            <div className=" max-w-[20%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-10 -skew-x-[15deg] rounded-[12px]  ">
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
            </div>
            <img
              className=" mt-10 h-[32px]"
              src="/images/Group 118.png"
              alt=""
            />
            <div className=" max-w-[20%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                  Strategy & Implementation
                </h2>
              </div>
              <ul className="mt-4 list-disc list-inside ">
                <li className="text-[18px] my-3 ">Strategy Documentation</li>
                <li className="text-[18px] my-3 ">
                  Timeline for Early Access, TGE, Full Release, Monetization. etc
                </li>
                <li className="text-[18px] my-3 ">Resource Planing</li>
                <li className="text-[18px] my-3 ">
                  Internal Processes for Vendor & Partnership Management
                </li>
              </ul>
            </div>
            <img
              className=" mt-10 h-[32px]"
              src="/images/Group 118.png"
              alt=""
            />

            <div className=" max-w-[20%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-10 -skew-x-[15deg] rounded-[12px]  ">
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
            </div>
          </div>
        </section>
        {/* Advisor */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          {" "}
          <div className=" container bg-gradient-to-t bgGradient w-full  skew-x-[40deg]   ">
            <h2 className="text-[36px] font-extrabold pl-10 py-3 -skew-x-[40deg]">
              THE ADVISOR
            </h2>
          </div>
          <div className="container my-[50px] flex justify-evenly ">
            <div className=" max-w-[30%] ">
              <div className="   bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                <h2 className="text-[30px] font-bold  skew-x-[15deg]">BRAIN</h2>
              </div>
              <ul className="list-disc list-inside ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid ">
                <li className="text-[18px] my-3 ">Regular Calls</li>
                <li className="text-[18px] my-3 ">
                  Dedicated Communication Channels
                </li>
                <li className="text-[18px] my-3 ">Async Feedback on Strategy</li>
              </ul>
            </div>

            <div className=" max-w-[30%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                <h2 className="text-[30px] font-bold  skew-x-[15deg]">NETWORK</h2>
              </div>
              <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                <li className="text-[18px] my-3 ">Conference support</li>
                <li className="text-[18px] my-3 ">Vendor Introductions</li>
                <li className="text-[18px] my-3 ">Alumni Network of GC Projects</li>
              </ul>
            </div>
            <div className=" max-w-[30%] ">
              <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                  LIFETIME SUPPORT
                </h2>
              </div>
              <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                <li className="text-[18px] my-3 py-3 ">Fundraising Support</li>
                <li className="text-[18px] my-3 py-2 ">
                  Your success is our success
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" container bg-gradient-to-t bgGradient w-full  skew-x-[40deg]   ">
            <h2 className="text-[36px] font-extrabold pl-10 py-3 -skew-x-[40deg]">
              SAMPLE TIMELINE
            </h2>
          </div>
          <div className="container text-[34px] text-center my-8 ">
            <h3>Optimization, Performance Tracking & Reporting</h3>
            <div>
              <div>
                <h4 className="text-[60px] text-[#F19BFF] font-extrabold flex items-center gap-x-10 pl-[120px] ">
                  WEEK 1-2
                  <img
                    className="max-w-[70%] w-full h-[25px]"
                    src="/images/Line 25.png"
                    alt=""
                  />
                </h4>
                <div className="flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ">
                  <img
                    className="rounded-[20px_0_0_20px]"
                    src="/images/Rectangle 42.png"
                    alt=""
                  />
                  <div className="text-left">
                    <ul className="list-disc list-inside">
                      Strategy Development & Planning Deliverables
                      <li>GTM Plan and Framework</li>
                      <li>Resource & Budget Requirements</li>
                      <li>Identify Potential Pitfalls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" container bg-gradient-to-t bgGradient w-full  skew-x-[40deg]   ">
            <h2 className="text-[36px] font-extrabold pl-10 py-3 -skew-x-[40deg]">
              COMPENSATION
            </h2>
          </div>
          <div className="container mt-[80px] flex justify-between ">
            <div className="max-w-[45%]">
              <div className="flex items-center gap-x-3 ">
                <h3 className="text-[40px] font-extrabold text-[#BF4AF6]">
                  FLEXIBLE
                </h3>
                <span className="block w-full h-[3px] bg-[#A04AF6] "></span>
              </div>
              <p className="text-[30px]">
                We accept crypto and fiat, and work with teams to meet them where
                they’re financially. If you’re raising a round, we’ll defer payment
                until you have money
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
                We accept Token and Equity grants as mechanisms to align incentives
                with the teams we work with so that your success is our success
              </p>
            </div>
            <img
              className="max-w-[45%] object-contain "
              src="/images/Group 69.png"
              alt=""
            />
          </div>
        </section>
        <section
          className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
          <div className=" container bg-gradient-to-t bgGradient w-full  skew-x-[40deg]   ">
            <h2 className="text-[36px] font-extrabold pl-10 py-3 -skew-x-[40deg]">
              JOIN THE GLITTERCLOUD FAMILY
            </h2>
          </div>
          <div className="container mt-[80px] gallery ">
            <img
              src="/images/Rectangle 29.jpg"
              alt=""
            />
            <img
              src="/images/Group 51.jpg"
              alt=""
            />
            <img
              src="/images/Group 52.jpg"
              alt=""
            />
            <img
              src="/images/Group 47.jpg"
              alt=""
            />
            <img
              src="/images/Group 49.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="container flex justify-around items-center pb-[120px] ">
          <div className="max-w-[38%] flex justify-center items-center flex-col gap-y-3 ">
            <img
              src="/images/TonyValcarcel.png"
              alt=""
            />
            <div className="  bg-gradient-to-t bgGradient w-full text-center skew-x-[40deg] rounded-[12px]   ">
              <h2 className="text-[42px] font-extrabold  -skew-x-[40deg]">
                TONY VALCARCEL
              </h2>
            </div>
            <p className="text-[34px]">Founder of GlitterCloud</p>
          </div>
          <div className="max-w-[55%]">
            <div className="border-b border-[#fff] border-solid pb-8 mb-8 ">
              <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                <h2 className="text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg]">
                  OUR EXPERIENCE
                </h2>
              </div>
              <div className="flex justify-around items-center gap-5 flex-wrap mt-4 ">
                <img
                  src="/images/Amazon_logo.svg"
                  alt=""
                />
                <img
                  src="/images/Twitch-logo.svg"
                  alt=""
                />
                <img
                  src="/images/Nintendo_logo.svg"
                  alt=""
                />
                <img
                  src="/images/ea-sport-logo.svg"
                  alt=""
                />
                <img
                  src="/images/Group 17.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                <h2 className="text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg]">
                  OUR CLIENTS
                </h2>
              </div>
              <div className="flex justify-around items-center gap-4 flex-wrap mt-4 ">
                <img
                  src="/images/SPARKBALL_LOGO.svg"
                  alt=""
                />
                <img
                  src="/images/MACS.svg"
                  alt=""
                />
                <img
                  src="/images/LOKDefiance-Logo.svg"
                  alt=""
                />
                <img
                  src="/images/Vector.svg"
                  alt=""
                />
                <img
                  src="/images/image 3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
