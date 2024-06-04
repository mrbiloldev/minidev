import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CourseData } from '../Context/MyCourseData'
import styles from './coursePrivate.module.css'
import { ImStatsBars2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { TbWriting, TbLock } from "react-icons/tb";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';

export default function CoursePrivateInfo() {
    const [courseList, setCourseList] = useContext(CourseData)
    const [openColl, setopenColl] = useState(false)
    const [courseListData, setcourseListData] = useState([
      
    ])
    const { id } = useParams()
    const Num = id?.replace(":", " ")



    const openCollapse = (son) => {
        // setCourseList(
        //     courseList.map(data => {
        //         return data.MyTest.map(data1 => {
        //             return data1.event.map(data2 => {
        //                 if (data2.id === son) {
        //                     // console.log({ ...data2, show: !data2.show });
        //                     return { ...data2, show: !data2.show }
        //                 }
        //                 return data2
        //             })
        //         })
        //     })
        // )
        // console.log(Num,"BuFilter");
        // setCourseList(courseList.map(data => {
        //     data.MyTest.map(data1 => {
        //         data1.event.map(data2 => {
        //             console.log(data2, "Bu data2");
        //             console.log(id, "BuId");
        //             if (data2.id === id) {
        //                 // console.log(data2.show==true, data2.id,data2.title);
        //                 return { ...data2, show: !data2.show }
        //             }
        //             return data2
        //         })
        //     })
        // }))

    }





    return (
        <div className={styles.Container}>
            {
                courseList.map(data => {
                    return (
                        <div key={data.id}>
                            {data?.MyTest?.filter(data => data.id == Num).map(value => {
                                return (
                                    <div key={value.title} className={styles.Main}>
                                        <div className={styles.TitleBox}>
                                            <p> Learning {value.title} <span>Free</span></p>
                                            <p><span>Start</span></p>
                                        </div>
                                        <div className={styles.CountGrow}>
                                            <div className={styles.Count}><p><ImStatsBars2 /></p><p>Malaka darajasi <br /><span>Beginner</span></p></div>
                                            <div className={styles.Count}><p><FaUsers /></p><p>Foydalanuvchilar <br /> <span>6500+</span></p></div>
                                            <div className={styles.Count}><p><TbWriting /></p><p>Sertifikati olish <br /> <span>Tekin rejalarga kiritilgan</span></p></div>
                                            <div className={styles.Count}><p><MdOutlineFreeCancellation /></p><p>Hech qanday <br /><span>shartlarsiz</span></p></div>
                                        </div>
                                        <div className={styles.CourseAbout}>
                                            <p>Bu kurs xaqida</p> 
                                            <p>{value.text}</p>
                                            <p>show more <BsChevronDown /></p>
                                        </div>
                                        <div className={styles.CourseList}>
                                            {
                                                value.event.map(data => {
                                                    return (
                                                        <Accordion  className={styles.AccordionItem}>
                                                            <Accordion.Item eventKey={data.id} className={styles.AccordionItem}>
                                                                <Accordion.Header  className={styles.AccordionItem}>
                                                                    <div className={styles.FirstBolim}>
                                                                        <div className={styles.FirstBolim1}>
                                                                            <div>
                                                                                {data.id}
                                                                            </div>
                                                                            <div>
                                                                                <p>{data.title}</p>
                                                                                <p>{data.text}</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* <div className={styles.IconsDown}>
                                                                            {openColl ?
                                                                                <BsChevronDown /> :
                                                                               <BsChevronUp />}
                                                                        </div>  */}
                                                                    </div>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className={styles.SecondBolim}>
                                                                        <div className={styles.SecondBolim1}>
                                                                            <div className={styles.SecondBolim11}>
                                                                                <div>
                                                                                    <GiBookmarklet />
                                                                                </div>
                                                                                <div>
                                                                                    Lesson
                                                                                </div>
                                                                            </div>
                                                                            <div className={styles.SecondBolim12}>
                                                                                {data.lesson}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.SecondBolim1}>
                                                                            <div className={styles.SecondBolim11}>
                                                                                <div>
                                                                                    <TbLock />
                                                                                </div>
                                                                                <div>
                                                                                    Quiz
                                                                                </div>
                                                                            </div>
                                                                            <div className={styles.SecondBolim12}>
                                                                                {data.quiz}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.SecondBolim1}>
                                                                            <div className={styles.SecondBolim11}>
                                                                                <div>
                                                                                    <TbLock />
                                                                                </div>
                                                                                <div>
                                                                                    Project
                                                                                </div>
                                                                            </div>
                                                                            <div className={styles.SecondBolim12}>
                                                                                {data.project}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.SecondBolim1}>
                                                                            <div className={styles.SecondBolim11}>
                                                                                <div>
                                                                                    <TbLock />
                                                                                </div>
                                                                                <div>
                                                                                    Article
                                                                                </div>
                                                                            </div>
                                                                            <div className={styles.SecondBolim12}>
                                                                                {data.article}
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                        // <div key={data.title} onClick={() => openCollapse(data.id)} className={data.show ? styles.CourseStartOpen : styles.CourseStartClose}>
                                                        // <div className={styles.FirstBolim}>
                                                        //         <div className={styles.FirstBolim1}>
                                                        //             <div>
                                                        //                 {data.id}
                                                        //             </div>
                                                        //             <div>
                                                        //                 <p>{data.title}</p>
                                                        //                 <p>{data.text}</p>
                                                        //             </div>
                                                        //         </div>
                                                        //         <div className={styles.IconsDown}>
                                                        //             {openColl ?
                                                        //                 <BsChevronDown /> :
                                                        //                 <BsChevronUp />}

                                                        //         </div>
                                                        //     </div>
                                                        //     <div className={styles.SecondBolim}>
                                                        //         <div className={styles.SecondBolim1}>
                                                        //             <div className={styles.SecondBolim11}>
                                                        //                 <div>
                                                        //                     <GiBookmarklet />
                                                        //                 </div>
                                                        //                 <div>
                                                        //                     Lesson
                                                        //                 </div>

                                                        //             </div>
                                                        //             <div className={styles.SecondBolim12}>
                                                        //                 {data.lesson}
                                                        //             </div>
                                                        //         </div>
                                                        //         <div className={styles.SecondBolim1}>
                                                        //             <div className={styles.SecondBolim11}>
                                                        //                 <div>
                                                        //                     <TbLock />
                                                        //                 </div>
                                                        //                 <div>
                                                        //                     Quiz
                                                        //                 </div>

                                                        //             </div>
                                                        //             <div className={styles.SecondBolim12}>
                                                        //                 {data.quiz}
                                                        //             </div>
                                                        //         </div>
                                                        //         <div className={styles.SecondBolim1}>
                                                        //             <div className={styles.SecondBolim11}>
                                                        //                 <div>
                                                        //                     <TbLock />
                                                        //                 </div>
                                                        //                 <div>
                                                        //                     Project
                                                        //                 </div>

                                                        //             </div>
                                                        //             <div className={styles.SecondBolim12}>
                                                        //                 {data.project}
                                                        //             </div>
                                                        //         </div>
                                                        //         <div className={styles.SecondBolim1}>
                                                        //             <div className={styles.SecondBolim11}>
                                                        //                 <div>
                                                        //                     <TbLock />
                                                        //                 </div>
                                                        //                 <div>
                                                        //                     Article
                                                        //                 </div>

                                                        //             </div>
                                                        //             <div className={styles.SecondBolim12}>
                                                        //                 {data.article}
                                                        //             </div>
                                                        //         </div>



                                                        //     </div>

                                                        // </div>
                                                    )
                                                })

                                            }
                                        </div>
                                        <div className={styles.CourseCode}>
                                            <div className={styles.CourseCodeText}>
                                                <div>
                                                    <p>Platformada</p>
                                                    <p>Amaliy o'rganish</p>
                                                    <p>Boshqa birovning kodlashini shunchaki tomosha qilmang yoki o'qimang - bizning onlayn, interaktiv platformamizda o'z kodingizni yozing. Siz hatto yo'lda turishingizga yordam berish uchun ko'rib chiqishingiz kerak bo'lgan AI asosidagi tavsiyalarni olasiz.
                                                    </p>
                                                </div>

                                            </div>
                                            <div className={styles.CourseCodeGif}>
                                                <img src="https://static-assets.codecademy.com/assets/course-landing-page/le-review.gif" alt="" />
                                            </div>

                                        </div>
                                        <div className={styles.CourseProject}>
                                            <div className={styles.CourseProjectTitle}>
                                                <p>Kursdagi prayektlar</p>
                                            </div>
                                            <div className={styles.CourseProjectItem}>
                                                {
                                                    value.project.map(data => {
                                                        return (
                                                            <div key={data.text} className={styles.CourseProjectItemCard}>
                                                                <p>Proyekt</p>
                                                                <p>{data.title}</p>
                                                                <p>{data.text}</p>
                                                            </div>

                                                        )
                                                    })
                                                }

                                            </div>

                                        </div>


                                    </div >
                                )

                            })
                            }
                        </div>)
                })
            }
        </div >
    )
}
