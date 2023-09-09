import React from 'react'
import { sectionData } from '../../data'
import './Section.css'

const Section = () => {
  return (
    <>
        {
            sectionData.map((data)=>(
                <div className='section'>
                    <span className='secId'>ID:{data.id}</span>
                    <h1 className='animate__animated animate__zoomInDown '>{data.title}</h1>
                </div>
            ))
        }
    </>
  )
}

export default Section