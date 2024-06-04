import React, { useState } from 'react'
import styles from './courselist.module.css'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { NavLink, Outlet } from 'react-router-dom'

export default function CourseList() {

  const [checkDrop, setCheckDrop] = useState(true)
  const [checkSubjec, setCheckSubjec] = useState(false)

  const CheckDrop = () => {
    setCheckDrop(!checkDrop)
  }
  const CheckSubj = () => {
    setCheckSubjec(!checkSubjec)
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.Header}>

          <div className={styles.DropdDown}>
            <div className={checkDrop ? styles.DropTextOpen : styles.DropTextClose}>
              <div className={styles.LangDrop} onClick={CheckDrop}>
                Language
                {
                  checkDrop ?
                    <span><BsChevronDown /></span>
                    :
                    <span><BsChevronUp /></span>
                }
              </div>
              <div className={styles.PragramLang}>
                <NavLink to={'/profile/courselist/htmlCss'}>Html/Css</NavLink>
                <NavLink to={'/profile/courselist/python'}>Python</NavLink>
                <NavLink to={'/profile/courselist/javascript'}>JavaScript</NavLink>
                <NavLink to={'/profile/courselist/java'}>Java</NavLink>
                <NavLink to={'/profile/courselist/sql'}>SQL</NavLink>
                <NavLink to={'/profile/courselist/ruby'}>Ruby</NavLink>
                <NavLink to={'/profile/courselist/csharp'}>C#</NavLink>
                <NavLink to={'/profile/courselist/cpp'}>C++</NavLink>
                <NavLink to={'/profile/courselist/golang'}>GoLang</NavLink>
                <NavLink to={'/profile/courselist/swift'}>Swift</NavLink>
                <NavLink to={'/profile/courselist/php'}>PHP</NavLink>
                <NavLink to={'/profile/courselist/kotlin'}>Kotlin</NavLink>
                <NavLink to={'/profile/courselist/r'}>R</NavLink>
                <NavLink to={'/profile/courselist/reactjs'}>React + Redux</NavLink>
              </div>
            </div>
            <div className={checkSubjec ? styles.SubjectOpen : styles.SubjectClose} >
              <div className={styles.SubJecDrop} onClick={CheckSubj}>
                Subject
                {
                  checkSubjec ?
                    <span><BsChevronDown /></span>
                    :
                    <span><BsChevronUp /></span>
                }
              </div>
              <div className={styles.SubjectLanguage}>
                <NavLink to={'./'}>Front-End</NavLink>
                <NavLink to={'./'}>Back-End</NavLink>
                <NavLink to={'./'}>Administration</NavLink>
                <NavLink to={'./'}>DataBase</NavLink>
                <NavLink to={'./'}>Web Design</NavLink>
                <NavLink to={'./'}>Mobile-Design </NavLink>
                <NavLink to={'./'}>DevOps</NavLink>
                <NavLink to={'./'}>Mobile Apps</NavLink>
                <NavLink to={'./'}>CISCO</NavLink>
                <NavLink to={'./'}>LINUX</NavLink>
                <NavLink to={'./'}>ASTERISK</NavLink>
            
              </div>
            </div>

          </div>
          <div className={styles.CoursData} >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
