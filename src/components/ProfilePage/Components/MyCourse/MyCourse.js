import React, { useState, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './mycourse.module.css'
import { CourseData } from './Context/MyCourseData'
import FilterSearch from './FilterSearch/FilterSearch'
export default function MyCourse() {
  const [courseList, setCourseList] = useContext(CourseData)
  let all = 0
  let aktive = 0
  let done = 0
  courseList.map(item => {
    return item.MyCourse.forEach(data => {

      if (data) {
        all++
      }
      if (data.active) {
        aktive++
      } else {
        done++
      }
    })

  });
  // console.log(all, aktive, done);
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.FilterMain}>
          <FilterSearch />
        </div>
        <div className={styles.MainText}>
          Kurslarim
        </div>
        <div className={styles.navbarMain}>

          <NavLink style={({ isActive }) => ({
            color: isActive ? '#086F6C' : '#000',
            borderBottom: isActive ? '2px solid #086F6C' : 'none'
          })}
            to="/profile/mycourse/all_course">Barcha kurslarim ({all})
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#086F6C' : '#000',
              borderBottom: isActive ? '2px solid #086F6C' : 'none'

            })}
            to="/profile/mycourse/active_course">Aktive kurslarim ({aktive}) </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#086F6C' : '#000',
              borderBottom: isActive ? '2px solid #086F6C' : 'none'

            })}
            to="/profile/mycourse/done_course">Bajargan kurslarim ({done})</NavLink>

        </div>
        <div className={styles.Outmain}>
          <Outlet />
        </div>


      </div>
    </div>)
}
