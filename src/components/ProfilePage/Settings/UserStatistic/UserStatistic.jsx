import React from 'react'
import style from './userStatistic.module.css'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Warranty from "../../../../assets/rank.png"
import Chempion from "../../../../assets/chempion.png"
import Goldmedal from "../../../../assets/goldmedal.png"
import Startup from "../../../../assets/startup.png"
import {BsFillCalendar2Fill} from "react-icons/bs"
 
export default function UserStatistic() {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["#086F6C", "#FEC600",],
        borderColor: "rgb(255, 99, 132)",
        data: [45, 10, 5, 2, 20, 30,],
        outerWidth: 10,
      },
    ],
  };

  let startup = [
    { number: 500, text: "Robo Rank", img: Warranty },
    { number: 1500, text: "Robo Rating", img: Chempion },
    { number: 200, text: "Tizimdagi o'rni", img: Goldmedal },
    { number: "50/200", text: "Yechgan masalalari", img: Startup },
  ]

  return (

    <div>
      <div className={style.Container}>
        <div className={style.Main}>
          <div className={style.totalstatic}>
            <h1>Umumiy statistika</h1>
            <div className={style.total}>
              {
                startup.map((item)=>{
                  return(
              <div className={style.box}>
                <div>
                  <div className={style.img}>
                    <img src={item.img} />
                    <span>{item.number}</span>
                  </div>
                  <p>{item.text}</p>
                </div>

              </div>

                  )
                })
              }


            </div>
          </div>

              <div className={style.calendar}>
                <li>Oy</li>
                <li>Hafta</li>
                <li> <span><BsFillCalendar2Fill/></span> <span> Kalendar</span></li>
              </div>

        </div>
      </div>
      <Bar data={data} />
    </div>
  )
}
