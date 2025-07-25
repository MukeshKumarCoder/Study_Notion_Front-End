import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    id: 1,
    Logo: logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    id: 2,
    Logo: logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    id: 3,
    Logo: logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    id: 4,
    Logo: logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
      <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
        {TimeLine.map((ele, i) => {
          return (
            <div className="flex flex-col lg:gap-3" key={ele.id}>
              <div className="flex gap-6" key={ele.id}>
                <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                  <img src={ele.Logo} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                  <p className="text-base">{ele.Description}</p>
                </div>
              </div>
              <div
                className={`hidden ${
                  TimeLine.length - 1 === i ? "hidden" : "lg:block"
                }  h-14 border-dotted border-r border-richBlack-100 bg-richBlack-400/0 w-[26px]`}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
        <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribBeanGreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
          {/* Section 1 */}
          <div className="flex gap-5 items-center lg:border-r border-caribBeanGreen-300 px-7 lg:px-14">
            <h1 className="text-3xl font-bold w-[75px]">10</h1>
            <h1 className="text-caribBeanGreen-300 text-sm w-[75px]">
              Years experiences
            </h1>
          </div>

          {/* Section 2 */}
          <div className="flex gap-5 items-center lg:px-14 px-7">
            <h1 className="text-3xl font-bold w-[75px]">250</h1>
            <h1 className="text-caribBeanGreen-300 text-sm w-[75px]">
              types of courses
            </h1>
          </div>
          <div></div>
        </div>
        <img
          src={TimeLineImage}
          alt="timelineImage"
          className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
        />
      </div>
    </div>
  );
};

export default TimelineSection;
