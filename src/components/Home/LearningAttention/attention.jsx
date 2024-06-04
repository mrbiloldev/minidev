import React from 'react';
import style from "./attention.module.css"
import AOS from "aos";

function Attention() {

    AOS.init({
        duration: 1000
    });
    return (
        <div className={style.container}>
            <h1 className={style.brand}>O'rganishda nimalarga e'tibor berish kerak?</h1>
            <div className={style.main}>
                <div className={style.box1} data-aos="fade-right" >
                    <div className={style.box}>
                        <div className={style.item}><div></div></div>
                        <div className={style.item}><div></div></div>
                        <div className={style.item}><div></div></div>
                    </div>
                    <div className={style.text}>
                        <div className={style.textbox} data-aos="fade-up">
                            <h1>Yunalishni tanlash</h1>
                            <p>Turli dasturlash tillari, ularning nima maqsadda ishlatilishi haqida internetdan izlaning, tajribali dasturchi akalardan maslahat so’rang. Bor variantlar haqida o’ylab, bittasini tanlang-da, shu sohaning eng zo’ri bo’lishga harakat qiling.</p>
                        </div>

                        <div className={style.textbox} data-aos="fade-up">
                            <h1>Ajratilgan vaqt</h1>
                            <p>Dangasa bo'lmang. Dasturlashni o'rganish sizdan barcha tunlaringiz, dam olish kunlaringiz, tatillaringizni tortib oladi. Shunday bo'lishi ham kerak, bir kunda 2-3 soat dasturlash orqali dasturchi bo'la olmaysiz. Buning uchun kuniga 7-8 soatlab tayyorgarlik ko'ring.</p>
                        </div>
                        <div className={style.textbox} data-aos="fade-up">
                            <h1>Nazariy bilim</h1>
                            <p> Vaqtida to'xtang. Bir qator kod yozdingiz va to'xtang. Siz shu bir qator kodingizni ipidan-ignasigacha qanday ishlashini tushunmasangiz keyingi qatorga o'tmang. Kitob yoki internetdan nazariy ma'lumotlarni korib chiqing.</p>
                        </div>
                    </div>
                </div>
                <div className={style.box1} data-aos="fade-left">
                    <div className={style.box}>
                        <div className={style.item}><div></div></div>
                        <div className={style.item}><div></div></div>
                        <div className={style.item}><div></div></div>
                    </div>
                    <div className={style.text}>
                        <div className={style.textbox} data-aos="fade-up">
                            <h1>Amaliy topshiriq</h1>
                            <p>Barcha amaliy topshiriqlarni bajarishingiz zarur. Ular qanchalik sodda yoki qiyin tuyilmasin, oldingizdan chiqqan har bir vazifani bajaring. Hech qachon nusxa olmang. Har bir qator kodni qo'lda kiritishingiz kerak. Ilgari yozganlaringizdan yoki boshqalar yozganidan nusxa olib qo'ymang.</p>
                        </div>
                        <div className={style.textbox} data-aos="fade-up">
                            <h1>Kod Yozish</h1>
                            <p>Ko'p yosh dasturchilar dasturning kodini yozishga shoshiladilar. Aslida esa dasturlash bu faqat kod yozish degani emas. Dasturlash bu — muammoni aniqlash, tadqiqotlar o'tkazish, yechimlarni topish va keyinchalik ularni sinab ko'rishdan iborat bo'lgan jarayon.</p>
                        </div>
                        <div className={style.textbox} data-aos="fade-up">
                            <h1>O'rganishni to'xtatish</h1>
                            <p>Dasturlash, har kuni yangi narsalar chiqib, kundan kunga rivojlanib borayotgan soha. Bu soha sizdan har kuni yangi narsalar o'rganishni va uni hayotga tatbiq qilishni talab qiladi. O'rganishdan to'xtasangiz, bir kun tongda uyg'onasiz va endi dasturchi emasligingizni tushunasiz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attention
