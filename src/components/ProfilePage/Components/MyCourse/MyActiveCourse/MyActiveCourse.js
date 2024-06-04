import React, { useState, useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { Progress } from 'antd';
import styles from './ActiveCourse.module.css'
import { CourseData } from '../Context/MyCourseData';
import { useNavigate } from 'react-router-dom';
export default function MyActiveCourse() {
  const [courseList, setCourseList] = useContext(CourseData)

  const navigate = useNavigate()
  const goDetail = (id) => {
    navigate(`/profile/mycourse/active_course/:${id}`)
  }
  courseList.map(data => {
    return data.MyCourse.forEach(element => {

      console.log(element.CourseKorildi, "CourseKorildi");
      console.log(element.course_soni, "course_soni");
    })
  })

  return (

    <div className={styles.Container}>
      <div >
        {
          courseList.map(data => {
            return (
              <div key={data.id} className={styles.CardGroup}>
                {
                  data.MyCourse.map(data => {
                    return (
                      data.active && (

                        <div key={data.id} onClick={() => goDetail(data?.id)} className={styles.CardItem}>
                          <div className={styles.Card}>
                            <div className={styles.CircleImg}>
                              <div>
                                <img src={data.img} alt="" />
                              </div>
                            </div>
                            <div className={styles.Title}>
                              <div className={styles.Rating}>
                                <p> <FaStar color={"#e4e5e9"} /></p><p>(4,5)/{data.rating}</p>
                              </div>
                              <div className={styles.TitleName}>
                                {data.name}
                              </div>
                            </div>
                            <div className={styles.Pragress}>

                              <div className={styles.ProgressText}>
                                <span>{data.CourseKorildi}/{data.course_soni}</span> <span>{parseInt((data.CourseKorildi / data.course_soni) * 100)}% bajarildi</span>
                              </div>
                              <div className={styles.ProgressData}>
                                <Progress
                                  strokeColor={{
                                    '0%': '#086F6C',
                                    '100%': '#086F6C',
                                  }}
                                  // Color={"#086F6C"}
                                  // style={{backgroundColor:"#086F6C"}}
                                  percent={parseInt((data.CourseKorildi / data.course_soni) * 100)}
                                  showInfo={false}
                                  status="active"
                                />

                              </div>

                            </div>
                            <div className={styles.btn}>
                              Kursni davom ettirish
                            </div>
                          </div>
                        </div>
                        )

                    )
                  })
                }
              </div>
            )
          })


        }


      </div>

    </div>
  )
}
