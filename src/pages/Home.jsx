import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HightlightText from "../components/core/HomePage/HightlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";


const Home = () => {
  return (
    <div>
      {/* Section1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-center">
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-200
                  transition-all duration-200 hover:scale-95 w-fit"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                       group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower your growth with
          <HightlightText text={"Coding skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton linkto={"/signup"}>Book a Demo</CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} />
          </video>
        </div>

        {/* {code section 1 } */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semi-bold">
                UnLock Your
                <HightlightText text={"coding courses"} />
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try It Yourself ",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More ",
              linkto: "/signup",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* {code section 2 } */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semi-bold">
                UnLock Your
                <HightlightText text={"coding courses"} />
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try It Yourself ",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More ",
              linkto: "/signup",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore />
      </div>
      {/* Section2 */}
      <div className="bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto ">
            <div className="h-[150px]"></div>
            <div className=" flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[90px] ">
            <div className="text-4xl font-semi-bold w-[45%]">
              Get The Skills You Need a
              <HightlightText text={"Job that is in demand "} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>

          <TimeLineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/* Section3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col itmes-center justify-between gap-8
      first-letter bg-richblack-900 text-white ">
      
            <InstructorSection />
            
            
            <h2 className="text-center  font-semibold text-4xl mt-10">Review from Others</h2>

            {/* {Review slider here} */}
      </div>
      

      {/* Footer */}
    </div>
  );
};

export default Home;
