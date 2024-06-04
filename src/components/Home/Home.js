import React from 'react'
import CarouselCircle from './Carousel/CarosuelCircle'
import styles from './Home.module.css'
import { Image } from 'antd';
import ImgHead from '../../assets/img.svg'
import SelectLang from './SelectLanguage/SelectLang';
import LearngGroup from './Learngroup/LearngGroup';
import CourseMentor from './Course/CourseMentor';
import Attention from './LearningAttention/attention';
import Typewriter from "typewriter-effect";
import Cardsour from './CardsOur/cardsour';
import PragrammingComment from './PragmmingComment/PragrammingComment';
import AOS from "aos";

export default function Home() {


  AOS.init({
    duration: 1000
  });
  
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>

        <div className={styles.Header}>
          <div className={styles.TextItem}>
            <div className={styles.TextItemDiv1}>

              {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Agar bajarishdan qo'rqsangiz buni albatta bajarib ko'ring.")
                      .start()
                      .pauseFor(20)
                  }}
                /> */}
              Agar bajarishdan qo'rqsangiz buni albatta bajarib ko'ring.
            </div>
            <div className={styles.TextItemDiv2}>

              {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(1).typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu convallis pellentesque non.")
                      .start()
                  }}
                /> */}
              Dasturlashga oid barcha video darslik va qullanmalar mutloqa be'pul, buning uchun ruyhatdan o'tsangiz kifoya.

            </div>
            <div>
              <form className={styles.FormSearch} action="/" method="get">
                <input
                  // style={{ border: "none" }}
                  type="text"
                  id="header-search"
                  name="s"
                  placeholder="Kurslarni izlash..."
                />
                <button type="submit">
                  <i style={{ color: "white" }}>Izlash</i>
                </button>
              </form>
            </div>
          </div>
          <div className={styles.ImgItem}>
            <img src={ImgHead} alt='salom' />
          </div>

        </div>
        <div className={styles.Section} >
          <SelectLang />
        </div>
        <div className={styles.Section}>
          <CarouselCircle />
        </div>
        {/* <div className={styles.Section}>
          <LearngGroup />
        </div> */}
        <div className={styles.Section}>
          <Attention />
        </div>
        <div className={styles.Section}>
          <CourseMentor />
        </div>
        <div className={styles.Section}>
          <Cardsour />
        </div>
        {/* <div className={styles.Section}>
          <PragrammingComment />
        </div> */}
      </div>
    </div>
  )
}
