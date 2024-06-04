import React from 'react'
import style from './userSetting.module.css'
import { FiCamera, FiLogOut } from "react-icons/fi"

export default function UserSettings() {
  let input = [
    { title: "ism", value: "Mirzabek" },
    { title: "Familiya", value: "Xolmedov" },
    { title: "Nom", value: "MrMcool" },
    { title: "Telefon nomer", value: "+998 90 999 90 00" },
    { title: "Email", value: "MirzabekHolmedov@gmail.com" },
    { title: "Mutaxassislik", value: "Fron-End Developer" },
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
              <h1 >Sozlamalar</h1>
            </div>
            <div className={style.inputgroup}>
              {
                input.map((item) => {
                  return (
                    <div className={style.input}>
                      <label htmlFor="name">{item.title}</label>
                      <br />
                      <input type="text" value={item.value} disabled />
                    </div>
                  )
                })
              }
                <div className={style.inputt}>
                      <label htmlFor="textarea">Biografiya</label>
                      <br />
                      <textarea name="" id="textarea"></textarea>
                    </div>
            </div>
            <div className={style.button}>
              <button>Saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
