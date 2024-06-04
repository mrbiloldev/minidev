import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './tests.module.css'
import TestPart from './TestPart/TestPart'
import { CourseData } from '../MyCourse/Context/MyCourseData'
export default function Tests() {
    const [courseList, setCourseList] = useContext(CourseData)

    
    const navigate = useNavigate()
    const GoInPage = (id) => {
        navigate(`/profile/tests/${id}`)
    }
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>

                {/* <TestPart value={testForCard} /> */}

                <div className={styles.CardGroup}>
                    {
                        courseList.map(data => {
                            return data.MyTest.map(data => {
                                return (
                                    <div key={data.id} onClick={() => GoInPage(data?.id)} className={styles.Card}>
                                        <div className={styles.CardImg}>
                                            <div>
                                                <img src={data.img} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.CardBtn}>
                                            <div>
                                                {data.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        })

                    }

                </div>



            </div>
        </div>
    )
}
