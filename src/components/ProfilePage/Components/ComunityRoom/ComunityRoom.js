import React from 'react'
import styles from './comunity.module.css'
import empty from '../../../../assets/empty.png'
export default function ComunityRoom() {
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>

          <img src={empty} alt="" />

      </div>
    </div>
  )
}
