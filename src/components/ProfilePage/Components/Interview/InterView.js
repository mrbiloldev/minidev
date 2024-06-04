import React, { useState } from 'react'
import styles from './interview.module.css'
import { FiSearch } from "react-icons/fi"
import { NavLink, Outlet } from 'react-router-dom'

export default function InterView() {
  const [data, setData] = useState([
    { id: 1, urlNav: "/profile/interview/interview-cpp", text: "Html", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 2, urlNav: "/profile/interview/interview-cpp", text: "JavaScript", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 3, urlNav: "/profile/interview/interview-cpp", text: "Java", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 4, urlNav: "/profile/interview/interview-cpp", text: "PHP", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 5, urlNav: "/profile/interview/interview-cpp", text: "python", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 6, urlNav: "/profile/interview/interview-cpp", text: "C++", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 7, urlNav: "/profile/interview/interview-cpp", text: "C#", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 8, urlNav: "/profile/interview/interview-cpp", text: "MySQL", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 9, urlNav: "/profile/interview/interview-cpp", text: "GO", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 10, urlNav: "/profile/interview/interview-cpp", text: "R", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 11, urlNav: "/profile/interview/interview-cpp", text: "Kotlin", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 12, urlNav: "/profile/interview/interview-cpp", text: "C", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 13, urlNav: "/profile/interview/interview-cpp", text: "Ruby", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 14, urlNav: "/profile/interview/interview-cpp", text: "Swift", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 15, urlNav: "/profile/interview/interview-cpp", text: "Node.js", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 16, urlNav: "/profile/interview/interview-cpp", text: "DevOps", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 17, urlNav: "/profile/interview/interview-cpp", text: "Laravel", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 18, urlNav: "/profile/interview/interview-cpp", text: "Css", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 19, urlNav: "/profile/interview/interview-cpp", text: "React", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 20, urlNav: "/profile/interview/interview-cpp", text: ".NET", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 21, urlNav: "/profile/interview/interview-cpp", text: "React Native", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 22, urlNav: "/profile/interview/interview-cpp", text: "dJango", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 23, urlNav: "/profile/interview/interview-cpp", text: "MongoDB", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 24, urlNav: "/profile/interview/interview-cpp", text: "Angular", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 25, urlNav: "/profile/interview/interview-cpp", text: "Data Structure", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 26, urlNav: "/profile/interview/interview-cpp", text: "Machine Learning", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 27, urlNav: "/profile/interview/interview-cpp", text: "Docker", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 28, urlNav: "/profile/interview/interview-cpp", text: "GIT", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 29, urlNav: "/profile/interview/interview-cpp", text: "NetWorking", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 30, urlNav: "/profile/interview/interview-cpp", text: "Software Testing", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 31, urlNav: "/profile/interview/interview-cpp", text: "Android", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 32, urlNav: "/profile/interview/interview-cpp", text: "HR", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 33, urlNav: "/profile/interview/interview-cpp", text: "Bootstrap", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 34, urlNav: "/profile/interview/interview-cpp", text: "Spring Interview", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 35, urlNav: "/profile/interview/interview-cpp", text: "Flutter Interview", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 36, urlNav: "/profile/interview/interview-cpp", text: "IOS ", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
    { id: 37, urlNav: "/profile/interview/interview-cpp", text: "OracleDBA ", img: "https://assets.interviewbit.com/packs/images/fallback_technology.094c57.svg" },
  ])
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.HeaderMain}>
          <div className={styles.HeaderImg}>
            <img src="https://assets.interviewbit.com/packs/images/guide-header-left.7f530e.png" alt="" />

          </div>
          <div className={styles.HeaderText}>
            <p>Technical Interview Questions
            </p>
          </div>
          <div className={styles.HeaderImg}>

            <img src="https://assets.interviewbit.com/packs/images/guide-header-right.6bb778.png" alt="" />
          </div>


        </div>
        <div className={styles.SearchPart}>
          <div className={styles.search}>
            <form>
              <button type="submit"><FiSearch size={24} color="#086F6C" /></button>
              <input type="text"
                id="header-search"
                name="s" placeholder='Search...' />
            </form>
          </div>



        </div>
        <div className={styles.InterviewForText}>
          <div className={styles.TextOne}>
            <p>Intervyuga Tayyorgarlik

            </p>
            <p>Texnik intervyu nima?

            </p>
            <p>Texnik suhbatlar texnik mutaxassislarni yollash jarayonining bir qismidir: bu sizning texnik ko'nikmalaringiz, shaxsiyatingiz va muammolarni hal qilish qobiliyatingizni baholaydigan yuqori darajada yo'naltirilgan va qat'iy jarayon. "Ko'rsating, aytmang" degan ma'noda siz suhbatdoshga o'z mahoratingizni ko'rsatishingiz kerak, shunchaki ularni aytib o'tmasdan. Texnik intervyuning maqsadi sizni topishmoqlar, aqliy o'yinlar yoki imkonsiz savollar bilan aldash emas, balki haqiqiy muammolarni, masalan, ishga qabul qilingandan so'ng duch keladigan muammolarni qanday hal qilishingizni ko'rishdir. Ko'pchiligimiz uchun texnik intervyular dahshatli tushdir (3-4 intervyu raundlari, masofaviy kodlash muammolari va hatto to'liq kunlik intervyular bilan). Garchi ular qo'rqitadigan bo'lsa-da, nima kutish kerakligini bilsangiz va suhbatga tayyorgarlik ko'rishga vaqt ajratsangiz, bu osonroq bo'ladi.
            </p>
            <p>Texnik intervyular oldindan aytib bo'lmaydigan darajada. Ariza beruvchi sifatida siz turli toifadagi standart texnik intervyu savollariga duch kelishingiz mumkin (xulq-atvorga oid savollar, ta'limga oid savollar, vaziyatga asoslangan savollar, texnik bilimlar, tajriba, sertifikatlar, loyihalarni boshqarish tizimlari haqidagi bilimlar, va boshqalar.). Mana bir nechtasi:
            </p>
          </div>
          <div className={styles.TextTwo}>
            <p>1.
              Ishingizda qaysi dasturlash tillaridan muntazam foydalanasiz?
            </p>
            <p>2.
              Sizda ushbu ish uchun malakali bo'lgan texnik sertifikatlaringiz bormi?
            </p>
            <p>3.
              Hozirgacha ishlagan eng foydali loyihangizni tushuntirib bera olasizmi? Unda o'z ulushingizni batafsil aytib bera olasizmi?
            </p>
            <p>4.
              Loyiha uchun aniq hisob-kitoblarni ta'minlash uchun qanday choralar ko'rasiz?
            </p>
            <p>5.
              Ikki bosqichli arxitektura bilan tanishmisiz? Uning elementlari va ishlatilishini tushuntiring.?
            </p>
          </div>
          <div className={styles.TextThree}>
            <p>Texnik Intervyuga Qanday Tayyorlanish Kerak?
            </p>
            <p>Quyida texnik lavozimlarga intervyu berish uchun bir nechta maslahatlar keltirilgan:
            </p>
            <div className={styles.TextFour}>
              <p>1.
                Muhim qadam, nima o'rganishingiz kerakligini aniqlash uchun ish tavsifini ko'rib chiqishdir. Bu ma'lumotlar tuzilmalarini o'rganish, ma'lum bir tilda kodlash yoki biznes razvedkasi vositalaridan foydalanishni o'z ichiga olishi mumkin.
              </p>
              <p>2.
                Muammolarni hal qilishda yondashuvingizni va mantiqiy fikrlashni tushuntiring. Bu sizning muammolarni hal qilish va tanqidiy fikrlash qobiliyatingizni ishga yollash menejeriga ko'rsatadi.
              </p>
              <p>3.
                Savolni tushunmasangiz, qo'shimcha ma'lumot so'rashdan tortinmang. Agar siz savolga javobni bilmasangiz, suhbatdoshga ayting yoki ko'proq ma'lumot olish uchun tekshirib ko'ring. Bu sizga to'g'ri javobni topishga yordam beradi.
              </p>
              <p>4.
                Dasturlash ko'nikmalaringizni oshirish uchun kodlash topshiriqlari va aqliy o'yinlarni sinab ko'ring.
              </p>
            </div>

          </div>
          <div className={styles.TextFive}>
            <p>Programming (Language, Tools & Technologies)
            </p>
            <p>Dasturlash - bu tushunarsiz darajada keng va o'sib borayotgan soha bo'lib, u dasturiy ta'minotni ishlab chiqishni eng istiqbolli kasblardan biriga aylantiradi. Bu dasturiy ta'minotni dasturlashni juda raqobatbardosh sohaga aylantiradi, bu erda siz Facebook, Amazon, Apple, Google va boshqalar kabi eng yaxshi texnologiya kompaniyalarida ishga joylashish uchun turli dasturlash tillari, vositalari va texnologiyalarini bilishingiz kerak. Shu nuqtai nazardan, texnik intervyu uchun qaysi tilni tanlash va o'zlashtirishni qanday aniqlash mumkin? Sizning tanlovingiz quyidagilarga asoslanishi kerak:
            </p>

          </div>
          <div className={styles.TextSex}>
            <p>
              <span>1. </span>
              Karyera doirasi va ish imkoniyatlari
            </p>
            <p>                <span>2. </span>

              Ishga qo'yiladigan talablar
            </p>
            <p>                <span>3. </span>

              Sizning ta'lim maqsadlaringiz
            </p>
            <p>                <span>4. </span>

              Ish haqi bandlari va foizlar
            </p>
            <p>                <span>5. </span>

              Mashhur dasturlash tillari
            </p>
          </div>
          <div className={styles.TextSeven}>
            <p>Ushbu omillarni hisobga olgan holda, biz sizga texnik intervyuga tayyorgarlik ko'rayotganda tanlashingiz mumkin bo'lgan eng yaxshi dasturlash tillari, vositalari va texnologiyalari ro'yxatini taqdim etamiz.
            </p>
          </div>

        </div>
        <div className={styles.CardLanguage}>
          {
            data.map(data => {
              return (
                <NavLink to={data.urlNav} key={data.id} className={styles.Cards}>
                  <div className={styles.CardItem}>
                    <div>
                      <img src={data.img} alt="" />
                    </div>
                    <div></div>
                    <div>{data.text}</div>
                  </div>
                </NavLink>
              )
            })
          }

        </div>

      </div>
    </div>
  )
} 
