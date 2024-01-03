import React from 'react'
import HightlightText from './HightlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png';
import compare_with_others from '../../../assets/Images/Compare_with_others.png';
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png';
import CTAButton from './CTAButton';
const LearningLanguageSection = () => {
  return (
    <div className='mt-[140px] mb-32'>
        <div className='flex flex-col gap-5 items-center'>

            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HightlightText text={" learning any language"}/>

            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.

            </div>

            <div className='flex flex-row items-center justify-center mt-5'>
            <img
             src={know_your_progress}
             alt="know_your_progress"
             className='object-contain -mr-32'
             />
            

            <img
             src={compare_with_others}
             alt="comaprewithothers"
             className=''
             />
           

            <img
             src={plan_your_lessons}
             alt="planyourlessons"
             className='object-contain -ml-36'
             />
</div>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div >
                        Learn More
                    </div>
                </CTAButton>
            </div>

        </div>
        

    </div>
  )
}

export default LearningLanguageSection;

