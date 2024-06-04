import React from 'react'
import style from "./clfbody.module.css"
import { BiGlobe } from "react-icons/bi"
import globus from '../../../assets/Globus.gif'
function Clfbody() {
    const card = [
        { line: "Online", nav1: "Online webiners", nav2: "Twice a week in the evening", nav3: "Access to materials 24/7", nav4: "From anywhere in the world", text: "Eng mashhur format. Biz Mood Me platformasida onlayn darslarni olib boramiz. Nazariya va amaliyotni o'rganish uchun materiallar shaxsiy hisobingizda bo'ladi. Haftada ikki marta kechqurun ma'ruza o'tkazamiz" },
        { line: "Offline", nav1: "Theory from our materials", nav2: "Pracrice with a teacher", nav3: "Access to materials 24/7", nav4: "Twice a week in the evening", text: "Sinf darslariga odatlanganlar uchun javob beradi. Siz nazariyani mustaqil o'rganish uchun materiallarimizni olasiz va amaliyot haftada 2 marta seshanba va payshanba kunlari soat 19:30 dan 22:00 gacha markazimizda bo'lib o'tadi." },
        { line: "Individual", nav1: "Online / offline", nav2: "Lesson between 10:00 and 17:00", nav3: "Choose the intensity", nav4: "Maximum 3 people", text: "Mantiq oddiy: talabalar qancha kam bo'lsa, o'qituvchi har biriga shunchalik ko'p e'tibor beradi. Biz formatda ham onlayn, ham oflayn rejimda dars beramiz. Agar siz uchun individual yondashuv va o'qitishning eng yuqori samaradorligi muhim bo'lsa, buni tavsiya qilamiz." },
    ]
    return (
        <div className={style.Container}>
            <div className={style.Main}>
                {
                    card.map(item => {
                        return (
                            <div className={style.card}>
                                <div className={style.bir}>
                                    <p>  <img src={globus} alt=""/></p><p>{item.line}</p>
                                </div>
                                <div className={style.box1}>
                                    <div className={style.box}>
                                        <div className={style.item}><span></span></div>
                                        <div className={style.item}><span></span></div>
                                        <div className={style.item}><span></span></div>
                                        <div className={style.item}><span></span></div>
                                    </div>
                                    <div className={style.uch}>
                                        <p>{item.nav1}</p>
                                        <p>{item.nav2}</p>
                                        <p>{item.nav3}</p>
                                        <p>{item.nav4}</p>
                                    </div>
                                </div>
                                <div className={style.tort}>
                                    <p>{item.text}</p>
                                    <button> {item.line} kurslar</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Clfbody
