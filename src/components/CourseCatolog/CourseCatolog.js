import React, { useState } from 'react';
import styles from './courseCatolog.module.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function CourseCatolog() {

  const [showCourse, setshowCourse] = useState(false );

  console.log(!showCourse);

  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.Data}>
          <div className={styles.Item1}>
            <div className={styles.Caursetext} onClick={() => setshowCourse(!showCourse)}>
              Kurslar Bulimi  {showCourse ? <span><BsChevronUp /></span> : <span><BsChevronDown /></span>}
            </div>

            <div className={showCourse ? styles.OpenCoursePart : styles.CloseCoursePart}>
              <div>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#086F6C' : '#000',
                  borderBottom: isActive ? 'none' : 'none'
                })} to="/courseCatolog/allcourse">Hamma Kurslar</NavLink>
              </div>
              <div>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#086F6C' : '#000',
                  borderBottom: isActive ? 'none' : 'none'
                })} to="/courseCatolog/interm">Yuqori Kurslar</NavLink>
              </div>
              <div>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#086F6C' : '#000',
                  borderBottom: isActive ? 'none' : 'none'
                })} to="/courseCatolog/elemtary">Boshlang'ich Kurslar</NavLink>
              </div>
            </div>


          </div>
          <div className={styles.Item2}>
            <Outlet />

          </div>

        </div>


      </div>
    </div >
  )
}
