import React from 'react'
import './programs.css'
import program_1 from '../../assets/programs_1.jpg'
import program_2 from '../../assets/programs_2.jpg'
import program_3 from '../../assets/programs_3.jpg'
import icon from '../../assets/icon.png'
const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>Graduation Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>Master Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>Post Graduation </p>
        </div>
        </div>
    </div>
  )
}

export default Programs
