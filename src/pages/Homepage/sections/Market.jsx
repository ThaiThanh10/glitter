import clsx from "clsx"
import { Title, Reveal } from "../../../components"

const Market = ({ width }) => {
    const data = [
        {
            img: "/images/setting.png",
            title: "CREATE YOUR GTM PLAN",
            text: "Work with us to create a custom strategy aligned with your product and timeline, leveraging your team's resources",
        },
        {
            img: "/images/research.png",
            title: "ESTABLISH YOUR STRATEGY",
            text: "Create a GTM plan based on your timeline and goals",
        },
        {
            img: "/images/team.png",
            title: "BUILD YOUR TEAM & EXECUTE",
            text: "Equip the existing team with the tools to execute and support recruitment of resources to fill gaps",
        },
    ]
    return (
        <section
            className={` mt-[80px] overflow-hidden object-contain bg-[left_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"GO TO MARKET THE RIGHT WAY"}
            />
            <div className="container px-0 ">
                <h3 className="text-[40px] font-medium my-[50px] px-4 xs:text-[34px] ">
                    Avoid the pitfalls of past projects and leverage Web3 successfully
                </h3>
                <Reveal>
                    <div
                        className={`" flex justify-around flex-wrap gap-10 xs:gap-[100px] px-10  "`}
                    >
                        {data.map((item, i) => (
                            <div
                                key={i}
                                // className={`" max-w-[30%] flex-1 relative  skew-x-[10deg] xs:skew-x-[0deg] ${width < 1300 && "max-w-full"
                                //     } "`}
                                className={clsx(
                                    "max-w-[30%]  relative  skew-x-[10deg] xs:skew-x-[0deg]",
                                    { "max-w-full": width < 1300 },
                                    { "flex-1": width < 980 && width > 1240 }
                                )}
                            >
                                <div className=" absolute top-[-14%] left-[-10%] -skew-x-[10deg] aspect-square xs:top-[-18%] xs:-skew-x-[0deg] z-10 bg-[#000] rounded-full max-w-[145px] xs:max-w-[130px] xs:left-[50%] xs:-translate-x-[50%] p-3 ">
                                    <img
                                        src={item.img}
                                        alt=""
                                    />
                                </div>

                                <div className="bg-gradient-to-r from-[#A73333] to-[#6A41C2] rounded-[20px] h-full  opacity-80 max-w-[100%] px-[72px] py-3 xs:p-7 xs:pt-[28%] xs:flexCenter xs:flex-col xs:text-center  ">
                                    <h4 className="text-[24px] font-extrabold   ml-[17%] xs:ml-0 mb-2 max-w-[210px] -skew-x-[10deg] xs:-skew-x-[0deg] ">
                                        {item.title}
                                    </h4>
                                    <p className="text-[20px] max-w-[270px] min-h-[150px] ml-[7%] xs:ml-0 -skew-x-[10deg] xs:-skew-x-[0deg] ">
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
export default Market
