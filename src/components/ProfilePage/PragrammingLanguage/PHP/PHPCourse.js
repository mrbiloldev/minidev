import React, { useState } from 'react'
import styles from './PHPCourse.module.css'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function PHPCourse() {
  const [ProCourse, setProCourse] = useState(true)
  const [FreeCourse, setFreeCourse] = useState(true)
  const [cards] = useState([
    {
      id: 1,
      price: "Free",
      name: "Learn PHP",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 2,
      price: "Free",
      name: "Learn PHP",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 3,
      price: "Free",
      name: "Learn PHP",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 4,
      price: "Pro",
      name: "Learn PHP",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 5,
      price: "Pro",
      name: "Learn PHP",
      level: 'Beginner',
      LessonCOunt: 20,
    },
    {
      id: 6,
      price: "Pro",
      name: "Learn PHP",
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
          <p>PHP</p>
          <p>PHP ( Inglizcha  PHP: Hypertext Preprocessor  - "PHP: hypertext preprocessor "; dastlab PHP / FI (Personal Home Page / Form Interpreter) va keyinchalik Personal Home Page Tools  - " Asboblar shaxsiy veb-sahifalarni yaratish uchun") umumiy maqsadli C-ga o'xshash skript tili bo'lib, u veb-ilovalarni ishlab chiqish uchun intensiv ravishda qo'llaniladi. Hozirda u hosting-provayderlarning aksariyati tomonidan qo'llab-quvvatlanadi va dinamik veb-saytlarni yaratishda ishlatiladigan etakchi tillardan biridir.
          </p>
        </div>
        <div className={styles.Link}>
          <p>
            Tegishli resurs
          </p>
          <p>
            <ul>
              <li>Docs:<a href={x}> PHP</a></li>
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
        PHPda yangimisiz? Bu yerdan boshlang

        </div>
        <div className={styles.CourseGroup}>
          <div className={styles.Coursetext}>
            <div className={styles.ForImg}>
              Learn
              PHP
            </div>
            <div className={styles.ForText}>
              <div className={styles.CoursePrice}>
                <p> <span>Free</span>Course </p>
              </div>
              <div className={styles.Lessonscount}>
                Boshlangichlar uchun: 200 ta darslik
              </div>
              <div className={styles.LessonText}>
              PHP va yulduzcha asoslarini o'rganing
                veb-sahifalarni yaratish va tahrirlash.

              </div>
            </div>

          </div>
          <div className={styles.CourseLink}>
            <p>
              Blog Post
            </p>
            <p>
              What is PHP: Common
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
            PHP bo'yicha hamma kurslar!
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
