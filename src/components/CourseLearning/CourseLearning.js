import React from 'react'
import style from './courseLearning.module.css'
import Courselearningheader from './Header/courselearningheader'
import Clfbody from './Body/clfbody'
export default function CourseLearning() {
  return (
    <div className={style.Container}>
        <Courselearningheader/>
        <Clfbody/>
    </div>
  )
}
