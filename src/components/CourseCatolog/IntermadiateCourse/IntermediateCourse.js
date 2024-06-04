import React, { useState } from 'react'
import styles from './intermediate.module.css'
import { GlobalOutlined, MailOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { BiSortAlt2, BiRefresh } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
export default function IntermadiateCourse() {
  const [courseInfo, setCourseInfo] = useState([
    {
      id: "1",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 0",
      button: "Beginner",
      text: "HTML/CSS",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "2",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "Python",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "3",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "JavaScript",
      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "4",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "Java",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "5",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "Kotlin",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "6",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "Ruby",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "7",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "C#",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "8",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "C++",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "9",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "GoLang",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "10",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "Swift",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "11",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "PHP",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "12",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "React + Redux",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "13",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "Angular",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "14",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "InterMediate",
      text: "R",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "15",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "Vue",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
    {
      id: "16",
      icon: <GlobalOutlined />,
      name: "Online",
      button0: "L 1",
      button: "Beginner",
      text: "C#",

      alltTime: "50 soat",
      allDay: "3 kun",
      allMonth: "6 oy",
      auth: "Ro'yhatdan o'tish",
      link: "https:kun.uz",
      nextIcons: <ArrowRightOutlined />,
    },
  ])
  const navigate = useNavigate()
  const AuthEnter = () => {
    navigate('/login')
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.CardGroup}>
          {
            courseInfo.filter(item => item.button === 'InterMediate').map(item => {
              return (
                <div className={styles.Card} key={item.id}>
                  <div className={styles.HightIcon}>
                    <div className={styles.Icons}>
                      <div>{item.icon}</div>
                      <div>{item.name}</div>
                    </div>

                    {item.button === "Beginner" ? <div className={styles.IconsBegText}>
                      {item.button0} </div> : <div className={styles.IconsInterText}>
                      {item.button0}
                    </div>
                    }
                  </div>
                  <div className={styles.CourseLevel}>
                    {item.button === "Beginner" ? <button type="submit" className={styles.BeginnerBut}>{item.button}</button> : <button type="submit" className={styles.IntermedBut}>{item.button}</button>}

                  </div>
                  <div className={styles.CourseTitle}>
                    <p>{item.text}</p>
                  </div>
                  <div className={styles.CourseInfo}>
                    <div>
                      <p>Umumiy</p>
                      <p>{item.allDay}</p>
                    </div>
                    <div>
                      <p>Hammasi</p>
                      <p>{item.allDay}</p>
                    </div>
                    <div>
                      <p>Davomiyligi</p>
                      <p>{item.allMonth}</p>
                    </div>
                  </div>
                  <div className={styles.CourseRegis}>
                    <div className={styles.CourseRegisIn} onClick={AuthEnter}>
                      <div>
                        {item.auth}
                      </div>
                      <div>
                        {item.nextIcons}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>

      </div>
    </div>
  )
}
