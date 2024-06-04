import React from 'react'
import styles from './footer.module.css'
import brand from '../../assets/CodeBox.svg'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

export default function FooterMain() {
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.brand}>
                    <Link to="/home">Code<span>Box</span></Link>

                </div>
                <div className={styles.text}>
                    <ul>
                        <li>Course Catolog</li>
                        <li>Learning Format</li>
                        <li>Biz Haqimizda</li>
                    </ul>

                </div>
                <div className={styles.Action}>
                    <p>BIZ IJTIMOIY TARMOQLARDA</p>
                    <div className={styles.Icons}>
                        <a href='#'><FaFacebookSquare /></a>
                        <a href='#'><FaInstagram /></a>
                        <a href='#'><FaTelegramPlane /></a>
                        <a href='#'><FaYoutube /></a>

                    </div>

                </div>


            </div>

        </div>
    )
}
