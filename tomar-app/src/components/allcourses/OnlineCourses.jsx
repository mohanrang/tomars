import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom";


const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' />
          <p class="cor">Browse Our Courses</p>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span class="link"><Link to="/form">GET</Link></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
