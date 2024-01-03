import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";
const timeline = [
  {
    Logo: Logo1,
    heading: "LeaDERSHIP",
    Description: "Fully Commited to the success fo the company",
  },
  {
    Logo: Logo2,
    heading: "LeaDERSHIP",
    Description: "Fully Commited to the success fo the company",
  },
  {
    Logo: Logo3,
    heading: "LeaDERSHIP",
    Description: "Fully Commited to the success fo the company",
  },
  {
    Logo: Logo4,
    heading: "LeaDERSHIP",
    Description: "Fully Commited to the success fo the company",
  },
];

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="w-[45%] flex flex-col gap-5">
          {timeline.map((element, index) => {
            return (
                <div className="flex flex-row gap-6  " key={index}>
                    <div className="w-[50px] h-[50px] bg-white flex items-center">
                        <img  src={element.Logo} />

                    </div>
                    <div>
                        <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                        <p className="text-base">{element.Description}</p>
                    </div>
                </div>
            )
          })}
        </div>

        <div className="relative shadow-blue-500">

          <img 
          src={timelineImage} 
          alt="lady-with-laptop" 
          className="shadow-white object-cover h-fit "
          />

          <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 
          left-[15%] translate-y-[-50%]">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeagreen-300 px-7 ">
                <p className="text font-bold">10</p>
                <p className="text-caribbeangreen-300 text-sm">Years of Experience </p>

            </div>

            <div className="flex gap-5 items-center px-7 ">
            <p className="text font-bold">250</p>
                <p className="text-caribbeangreen-300 text-sm">Types of Courses </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
