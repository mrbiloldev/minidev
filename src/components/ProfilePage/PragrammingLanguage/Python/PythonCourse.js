import React, { useState } from 'react'
import styles from '../HtmlCss/htmlCss.module.css'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'


export default function Python() {
  const [ProCourse, setProCourse] = useState(true)
  const [FreeCourse, setFreeCourse] = useState(true)
  const [cards, setCards] = useState([
    {
      id: 1,
      price: "Free",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 2,
      price: "Free",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 3,
      price: "Free",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 4,
      price: "Pro",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 5,
      price: "Pro",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 6,
      price: "Pro",
      name: "Learn Python",
      level: 'Beginner',
      LessonCOunt: 20,
    },
  ])
  let x = '#'
  let sana = new Date()
  return (
    <div className={styles.Container}>

      <div className={styles.InfoLink}>
        <div className={styles.Info}>
          <p>Python</p>
          <p>Python (payton, piton) — turli sohalar uchun yuqori darajadagi umumiy maqsadli dasturlash tili. Uning dizayn falsafasi muhim chekinishdan foydalangan holda kodning oʻqilishiga urgʻu beradi. Uning til konstruksiyalari va obyektga yoʻnaltirilgan yondashuvi dasturchilarga kichik va yirik loyihalar uchun aniq, mantiqiy kod yozishda yordam berishga qaratilgan. Shuningdek Python sunʼiy intellekt hamda maʼlumotlar muhandisiligi sohalarining tili hisoblanadi.
          </p>
        </div>
        <div className={styles.Link}>
          <p>
            Tegishli resurs
          </p>
          <p>
            <ul>
              <li>Docs:<a href={x}> Python</a></li>
              <li><a href={x}>Cheatsheets</a></li>
              <li><a href={x}>Community Forum</a></li>
              <li><a href={x}>Articles</a></li>
              <li><a href={x}>Projects</a></li>
            </ul>
          </p>
        </div>
      </div>
      <div className={styles.CourseInfo}>
        <div className={styles.TextInfo}>
      Python-ga yangimisiz? Bu yerdan boshlang

        </div>
        <div className={styles.CourseGroup}>
          <div className={styles.Coursetext}>
            <div className={styles.ForImg}>
              Learn
              Python
            </div>
            <div className={styles.ForText}>
              <div className={styles.CoursePrice}>
                <p> <span>Free</span>Course </p>
              </div>
              <div className={styles.Lessonscount}>
                Boshlangichlar uchun: 200 ta darslik
              </div>
              <div className={styles.LessonText}>
              Python asoslarini o'rganing.
              

              </div>
            </div>

          </div>
          <div className={styles.CourseLink}>
            <p>
              Blog Post
            </p>
            <p>
              What is Python: Common
              uses and defining
              features            </p>
            <p> {sana.toDateString()}</p>
          </div>
        </div>
      </div>
      <div className={styles.CourseCards}>
        <div className={styles.Filtergroup}>
          <div className={styles.FilterText}>
            <div className={styles.Text1}>
              Python Bo'yicha hamma kurslar!
            </div>
            <div className={styles.Test1}>
              <div className={styles.FilterPrice} onClick={() => setProCourse(!ProCourse)}>
                <p>Pro Course  {
                  ProCourse ?
                    <span><BsChevronDown /></span>
                    :
                    <span><BsChevronUp /></span>
                }
                </p>
                <div className={ProCourse ? styles.FilterOpen : styles.FilterClose}>
                  <p>salom</p>
                  <p>salom</p>
                  <p>salom</p>
                  <p>salom</p>
                </div>
              </div>
              <div className={styles.FilterLevel} onClick={() => setFreeCourse(!FreeCourse)}>
                <p>Free Course  {
                  FreeCourse ?
                    <span><BsChevronDown /></span>
                    :
                    <span><BsChevronUp /></span>
                }
                </p>
                <div className={FreeCourse ? styles.FilterOpen : styles.FilterClose}>
                  <p>salom</p>
                  <p>salom</p>
                  <p>salom</p>
                  <p>salom</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.CardGroup}>
          {
            cards.map(data => {
              return (
                <div key={data.id} className={styles.Cards}>
                  <div className={styles.card1}>
                    <p> <span>{data.price}</span> Course </p>
                  </div>
                  <div className={styles.card2}>
                    {data.name}
                  </div>
                  <div className={styles.card3}>
                    <div>
                      <p></p>
                      <p></p>
                    </div>
                    <div>
                      {data.level} Daraja
                      <div className={styles.card4}>
                        Darslar soni: <span>{data.LessonCOunt}</span> ta
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
