import React from 'react'
import styles from "./clfheader.module.css"
import LearnFormat from '../../../assets/LearnFormat.png'
import animo from '../../../assets/DownArrow.svg'
function Courselearningheader() {
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.MainText}>
                    <div className={styles.TextBold}>
                        <p>Ta'lim shakli</p>
                    </div>
                    <div className={styles.TextSmall}>
                        <p>Har birimiz har xil ehtiyojlarga egamiz. Biz bu haqda bilamiz, shuning uchun biz bir nechta o'qitish formatlarini ishlab chiqdik. Biz bilan o'qish uchun hamma narsa qulay edi.</p>
                    </div>
                    <div className={styles.TextIcon}>

                        <img src={animo} alt="" />

                    </div>
                </div>

                <div className={styles.MainImg}>
                    <img src={LearnFormat} />

                </div>
            </div>
        </div>
    )
}

export default Courselearningheader
