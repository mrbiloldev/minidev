import React from 'react'
import style from "./boshqaruvpaneli.module.css"

function Boshqaruvpaneli() {
    let cardone=[
        {name:"Sleepln", til: "Java", bolim:"String", daraja:"O'rta"},
        {name:"PosNeg", til: "Java", bolim:"Array", daraja:"Murakkab"},
        {name:"FrontBack", til: "Java", bolim:"String", daraja:"Oddiy"}
    ]

    return (
        <div className={style.Container}>
            <div className={style.Main}>
                <div className={style.result}>
                    <div className={style.resultBox}>
                        14
                        <br />
                        <span>Mavjud Kurslar</span>
                    </div>
                    <div className={style.resultBox}>
                        10
                        <br />
                        <span>Aktiv Kurslar</span>
                    </div>
                    <div className={style.resultBox}>
                        3
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
                        <div className={style.card}>
                            <div className={style.circle}></div>
                            <div className={style.button}>
                                <button>Sleepln</button>
                            </div>
                            <div className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet neque, amet amet. Est, sit tellus parturient ut aliquam et vulputate. Urna sagittis mattis lectus volutpat, ullamcorper augue. Quis a, facilisi aliquam viverra congue sapien vestibulum purus.
                            </div>
                            <div className={style.level}>
                                <div className={style.til}>
                                    <p>Dasturlash tili</p>
                                    <h5>Java</h5>
                                </div>
                                <div className={style.bolim}>
                                    <p>Bo'lim</p>
                                    <h5>String</h5>
                                </div>
                                <div className={style.daraja}>
                                    <p>Daraja</p>
                                    <h5>O'rta</h5>
                                </div>
                            </div>
                            <div className={style.bajarish}>
                                <button>Bajarish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boshqaruvpaneli
