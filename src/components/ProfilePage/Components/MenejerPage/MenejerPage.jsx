import React, { useContext } from 'react'
import style from './meneder.module.css'
import { AiOutlineArrowRight } from "react-icons/ai"
import { Progress } from 'antd';
import { CourseData } from '../MyCourse/Context/MyCourseData';

export default function MenejerPage() {
  const [courseList, setCourseList] = useContext(CourseData)

  let cardone = [
    { name: "Sleepln", til: "Java", bolim: "String", daraja: "O'rta" },
    { name: "PosNeg", til: "Java", bolim: "Array", daraja: "Murakkab" },
    { name: "FrontBack", til: "Java", bolim: "String", daraja: "Oddiy" }
  ]

  let cardtwo = [
    { name: 'Java', topshiriq: 120, bolim: 20, foiz1: 50, foiz2: 40, },
    { name: 'Python', topshiriq: 200, bolim: 35, foiz1: 60, foiz2: 35, },
    { name: 'Go', topshiriq: 80, bolim: 12, foiz1: 95, foiz2: 40, },
  ]
  let all = 0
  let aktive = 0
  let done = 0
  courseList.forEach(item => {
    if (item) {
      all++
    }
    if (item.active) {
      aktive++
    } else {
      done++
    }

  });
  return (
    <div className={style.Container}>
      <div className={style.Main}>
        <div className={style.result}>
          <div className={style.resultBox}>
            {all}
            <br />
            <span>Mavjud Kurslar</span>
          </div>
          <div className={style.resultBox}>
            {aktive}
            <br />
            <span>Aktiv Kurslar</span>
          </div>
          <div className={style.resultBox}>
            {done}
            <br />
            <span>Tugatilgan Kurslar</span>
          </div>
          <div className={style.resultBox}>
            145/1200
            <br />
            <span>Tizimdagi Darajangiz</span>
          </div>
          <div className={style.resultBox}>
            14/5000
            <br />
            <span>Yechgan masalalaringiz</span>
          </div>
        </div>
        <div className={style.cardgroup}>
          <div className={style.cards_navbar}>
            <h1>So'ngi ko'rilgan kurslar</h1>
            <button>Barchasi</button>
          </div>
          <div className={style.cards}>
            {
              cardone.map((item) => {
                return (
                  <div className={style.card}>
                    <div className={style.circle}></div>
                    <div className={style.button}>
                      <button>{item.name}</button>
                    </div>
                    <div className={style.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet neque, amet amet. Est, sit tellus parturient ut aliquam et vulputate. Urna sagittis mattis lectus volutpat, ullamcorper augue. Quis a, facilisi aliquam viverra congue sapien vestibulum purus.
                    </div>
                    <div className={style.level}>
                      <div className={style.til}>
                        <p>Dasturlash tili</p>
                        <h5>{item.til}</h5>
                      </div>
                      <div className={style.bolim}>
                        <p>Bo'lim</p>
                        <h5>{item.bolim}</h5>
                      </div>
                      <div className={style.daraja}>
                        <p>Daraja</p>
                        <h5>{item.daraja}</h5>
                      </div>
                    </div>
                    <div className={style.bajarish}>
                      <button> <span>Bajarish</span> <span> <AiOutlineArrowRight /></span></button>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>

        <div className={style.cards_group_two}>
          <div className={style.cards_navbar}>
            <h1>Hozirda mavjud kurslarim</h1>
            <button>Barchasi</button>
          </div>
          <div className={style.cards_two}>
            {
              cardtwo.map((item) => {
                return (
                  <div className={style.card_two}>
                    <div className={style.card_two_button}>
                      <button>{item.name}</button>
                    </div>
                    <div className={style.results_two}>
                      <div className={style.result_two}>
                        <span>{item.topshiriq}</span>
                        <p>Topshiriq</p>
                      </div>
                      <div className={style.result_two}>
                        <span>{item.bolim}</span>
                        <p>Bo'lim</p>
                      </div>
                    </div>
                    <div className={style.progress}>
                      <p>Natijalar</p>
                      <div>
                        <span>Bajarilgan topshiriq</span> <span>{item.foiz1}%</span>
                      </div>
                      <p>
                        <Progress
                          strokeColor={{
                            '0%': '#F26440',
                            '100%': '#FFAD0F',
                          }}
                          percent={item.foiz1}
                          showInfo={false}

                        />
                      </p>
                      <div>
                        <span>Bajarilgan bo'limlar</span> <span>{item.foiz2}%</span>
                      </div>
                      <p>
                        <Progress
                          strokeColor={{
                            '0%': '#F26440',
                            '100%': '#FFAD0F',
                          }}
                          percent={item.foiz2}
                          showInfo={false}

                        />
                      </p>
                      <div className={style.cardtwo_button}>
                        <button>Kursni boshlash <AiOutlineArrowRight /> </button>
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>



        <div className={style.cards_group_two}>
          <div className={style.cards_navbar}>
            <h1>Barcha Kurslar</h1>
            <button>Barchasi</button>
          </div>
          <div className={style.cards_two}>
            {
              cardtwo.map((item) => {
                return (
                  <div className={style.card_two}>
                    <div className={style.card_two_button}>
                      <button>{item.name}</button>
                    </div>
                    <div className={style.results_two}>
                      <div className={style.result_two}>
                        <span>{item.topshiriq}</span>
                        <p>Topshiriq</p>
                      </div>
                      <div className={style.result_two}>
                        <span>{item.bolim}</span>
                        <p>Bo'lim</p>
                      </div>
                    </div>
                    <div className={style.text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod culpa quidem minima cupiditate sit omnis tempora voluptate, libero totam cumque? Ratione neque corporis impedit inventore nulla fugit, atque praesentium.
                    </div>

                    <div className={style.cardtwo_button}>
                      <button>Kursni boshlash <AiOutlineArrowRight /> </button>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}
