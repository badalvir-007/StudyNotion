import React, { useState } from 'react';
import {HomePageExplore} from '../../../data/homepage-explore';
import HightlightText from './HightlightText';
import CourseCard from './CourseCard';



const tabsName =[
    "Free",
    "New to Coding",
    "Most Popluar ",
    "Skill paths",
    "Carrer paths",
]
const ExploreMore = () => {
    const [currentTab , setCurrnetTab] = useState(tabsName[0]);
    const [courses , setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard , setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) =>{
        setCurrnetTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
  
  
    return (
    <div>
        <div className='text-4xl font-semibold text-center'>
            Unlock the 
            <HightlightText text={"Power of Code"} />
        </div>

        <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'> 
            learn to build anything you imagine
        </p>

        <div className=' mt-5 flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100
              px-1 py-1 '>
            {
                tabsName.map( (element ,index) => {
                    return(
                        <div 
                        className={`text-[16px] flex flex-row items-center gap-2
                        ${ currentTab === element
                        ? "bg-richblack-900 text-richblack-5 font-medium"
                         : "text-richblack-200 "} rounded-full transition-all duration-200 cursor-pointer
                          hover:bg-richblack-900 hover:text-richblack-5 px-7 py-7 `}
                          key={index}
                          onClick={()=> setMyCards(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>


        <div className='h-[150x]'>

        </div>

        {/* {course card 3} */}
        <div>
            {
                courses.map( (element ,index) => {
                    return (
                        <CourseCard 
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMore;
