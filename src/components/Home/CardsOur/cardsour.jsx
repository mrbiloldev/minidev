import React from 'react'
import style from "./cardsour.module.css"
import AOS from "aos";

function Cardsour() {

    AOS.init({
        duration: 1000
    });
    return (
        <div className={style.Container}>
            <div className={style.Main}>
                <div className={style.brand} data-aos="fade-up">
                    <h1>Nega aynan BIZ?</h1>
                </div>
                <div className={style.cards}>
                    <div className={style.card} data-aos="fade-right">
                        <div className={style.name}>
                            Kurslar haqida
                            <div className={style.text}>
                                Bizning kurslarimiz Yuqori tajribaga ega bo’lgan dasturchilar tamonidan tayyorlangan.
                            </div>
                        </div>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.card2} data-aos="fade-up-right">
                        <div className={style.img}></div>
                        <div className={style.name}>
                            Amaliy ko’mak
                            <div className={style.text}>
                                Bizning kurslarimiz siz tajribali dasturchilarda yordam olishingiz mumkin. Bu mutlqoa tekin
                            </div>
                        </div>
                    </div>
                    <div className={style.card} data-aos="zoom-in" >
                        <div className={style.name}>
                            Bandlikka yordam
                            <div className={style.text}>
                                Eng yaxshi tugatgan va testlardan yuqori natijaga erishgan talabalarga ish topishda yordamlashiladi.
                            </div>
                        </div>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.card} data-aos="zoom-in">
                        <div className={style.img}></div>
                        <div className={style.name}>
                            Interview savollar
                            <div className={style.text}>
                                Siz kurslarni tuliq tuganganingizdan sung sizga mutloqa tekin interview savollari va kerakli maslahatlar beriladi
                            </div>
                        </div>
                    </div>
                    <div className={style.card} data-aos="fade-up-left">
                        <div className={style.name}>
                            Testlar
                            <div className={style.text}>
                                Bizning tizim mutlaqo tekin bo'lgan testlarni taqdim etadi bu albatta sizning bilimingizni yanada yoqoriroq qilish uchun xizmat qiladi.
                            </div>
                        </div>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.card} data-aos="fade-left">
                        <div className={style.img}></div>
                        <div className={style.name}>
                            Jamoa
                            <div className={style.text}>
                                Biz sizga amaliy yordam bilan birga kerakli jamoa tuzishingizga ham yordam beramiz bu siz va boshqalar uchun juda ham foydaliroq
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardsour
