import React, { useState } from 'react'
import styles from './courseMentor.module.css'
import { AiOutlineUp, AiOutlineCheck } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import { FiMoreVertical } from "react-icons/fi";
import User1 from '../../../assets/user1.png'
import User2 from '../../../assets/user2.png'
import User3 from '../../../assets/user3.png'
import User4 from '../../../assets/user4.png'
import User5 from '../../../assets/user5.png'
import AOS from "aos";

export default function CourseMentor() {
  const [carosuel, setCarosuel] = useState([
    { id: 1, img: User1, icon: <FiMoreVertical />, title: "BackEnd Developer", name: "ALisher Farmanov", job: "O'qituvchi" },
    { id: 2, img: User2, icon: <FiMoreVertical />, title: "FrontEnd Developer", name: "Murodilla Xayitov", job: "O'qituvchi" },
    { id: 3, img: User3, icon: <FiMoreVertical />, title: "Nodejs Developer", name: "Sardor Alimov", job: "O'qituvchi" },
    { id: 4, img: User4, icon: <FiMoreVertical />, title: "DataBase", name: "Fahriddin Nozimov", job: "O'qituvchi" },
    { id: 5, img: User5, icon: <FiMoreVertical />, title: "DevOps", name: "Azamat Daliev", job: "O'qituvchi" },
    { id: 6, img: User2, icon: <FiMoreVertical />, title: "Mobile Apps", name: "Ukug'bek Jamgirov", job: "O'qituvchi" },
    { id: 7, img: User3, icon: <FiMoreVertical />, title: ".Net", name: "Jamshid Saidov", job: "O'qituvchi" },
    { id: 8, img: User4, icon: <FiMoreVertical />, title: "Kotlin", name: "Kozim Salimov", job: "O'qituvchi" },
    { id: 9, img: User5, icon: <FiMoreVertical />, title: "C++", name: "Qudrat Xalimov", job: "O'qituvchi" },
  ]
  )
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  AOS.init({
    duration: 1000
  });
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.Title} data-aos="fade-up">
          <p>Bizda mavjud kurslar</p>
        </div>
        <div className={styles.Carosuel} data-aos="fade-up">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            className={styles.CarosuelItem}
          >
            {carosuel.map(data => {
              return (
                <div className={styles.Cards} key={data.id}>
                  <div className={styles.CardImg}>
                    <div className={styles.img}>
                      <img src={data.img} alt="" />
                    </div>

                  </div>
                  <div className={styles.CardMenu}>
                    <span className={styles.IconsMenu}>{data.icon}</span>
                  </div>
                  <div className={styles.CardTitle}>
                    <p>{data.title}</p>
                  </div>
                  <div className={styles.CardName}>
                    <p>{data.name}</p>
                    <p>{data.job}</p>
                  </div>
                </div>
              )
            })
            }
          </Carousel>

        </div>
      </div>
    </div>
  )
}

// export default CourseMentor;
