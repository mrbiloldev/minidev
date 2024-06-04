import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseData } from '../../MyCourse/Context/MyCourseData'
import style from "./TestPart.module.css"
import Accordion from 'react-bootstrap/Accordion';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function TestPart() {
    const { id } = useParams()
    const [showMe, setShowMe] = useState(false)
    console.log(id);
    const [courseList, setCourseList] = useContext(CourseData)
    const ShowGoto = (son) => {

        setShowMe(!showMe)

    }
    return (
        <div className={style.Container}>
            <div className={style.Main}>


                {courseList.map(data => {
                    return data.MyTest.filter(value => value.id == id).map(data => {

                        return (
                            <>
                                <div className={style.AlertData}>
                                    <div className={style.AlertDataImg}>
                                        <img src={data.img} alt="" />

                                    </div>
                                    <div className={style.AlertDataText}>
                                        <p>{data.title}</p>
                                        <p>{data.testText}</p>
                                    </div>
                                </div>

                                <div className={style.AccorDions}>
                                    {

                                        data.event.map(data => {
                                            return (
                                                <Accordion defaultActiveKey="0" className={style.AccordionGroup}>
                                                    <Accordion.Item eventKey={data.id}>
                                                        <Accordion.Header className={style.AccordionItem}>
                                                            <div className={style.FirstBolim}>
                                                                <div className={style.FirstBolim1}>
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
                                                            <Timeline>
                                                                <Timeline.Item color="green">
                                                                    <div className={style.TestCardGroup}>
                                                                        <div className={style.TestCartItem}></div>
                                                                        <div className={style.TestCartItem}></div>
                                                                        <div className={style.TestCartItem}></div>
                                                                        <div className={style.TestCartItem}></div>

                                                                    </div>
                                                                </Timeline.Item>
                                                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                                                <Timeline.Item color="red">
                                                                    <p>Solve initial network problems 1</p>
                                                                    <p>Solve initial network problems 2</p>
                                                                    <p>Solve initial network problems 3 2015-09-01</p>
                                                                </Timeline.Item>
                                                                <Timeline.Item>
                                                                    <p>Technical testing 1</p>
                                                                    <p>Technical testing 2</p>
                                                                    <p>Technical testing 3 2015-09-01</p>
                                                                </Timeline.Item>
                                                                <Timeline.Item color="gray">
                                                                    <p>Technical testing 1</p>
                                                                    <p>Technical testing 2</p>
                                                                    <p>Technical testing 3 2015-09-01</p>
                                                                </Timeline.Item>
                                                                <Timeline.Item color="gray">
                                                                    <p>Technical testing 1</p>
                                                                    <p>Technical testing 2</p>
                                                                    <p>Technical testing 3 2015-09-01</p>
                                                                </Timeline.Item>
                                                                <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                                                                    <p>Custom color testing</p>
                                                                </Timeline.Item>
                                                            </Timeline></Accordion.Body>
                                                    </Accordion.Item>

                                                </Accordion>

                                            )
                                        })
                                    }







                                </div>
                            </>
                        )

                    })
                })}

            </div>

        </div>
    )
}
