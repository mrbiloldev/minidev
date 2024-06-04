import React from 'react'
import style from './userfull.module.css'
import { FiCamera, FiLogOut } from "react-icons/fi"

export default function UserSettings() {
  let input = [
    { title: "Ro’yhatdan o’tilgan sana", value: "29.09.2022 y, 11:02" },
    { title: "Isim", value: "Mirzabek" },
    { title: "Familya", value: "Holmedov" },
    { title: "Nom", value: "MrMcool" },
    { title: "Email", value: "MirzabekHolmedov@gmail.com" },
    { title: "Telefon nomer", value: "+998 90 999 90 00" },
    { title: "Mutaxasislik", value: "Front-End Devoloper" },
    { title: "Biografiya", value: "-/-" },
  ]
  return (
    <div className={style.Container}>
      <div className={style.Main}>
        <div className={style.box}>
          <div className={style.img}>
            <img src="" alt="" />
            <div className={style.camera}>
              <p>
                <FiCamera />
              </p>

            </div>
          </div>
          <div className={style.data}>
            <div className={style.title}>
              <h1><span>Hello!</span> <br /> Mirzabek Holmedov</h1>
              <button>Chiqish <span> < FiLogOut /></span> </button>
            </div>
            <div className={style.set_title}>
              <h1 >Profilim</h1>
            </div>
            <div className={style.inputgroup}>
              {
                input.map((item)=>{
                  return(
            <div className={style.input}>
              <div>{item.title}</div>
              <div>{item.value}</div>
            </div>
                  )
                })
              }

            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
