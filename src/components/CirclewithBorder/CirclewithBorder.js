import React from 'react'
import './CirclewithBorder.css'
import styles from './CirclewithBorder.module.css'
import shape from '../../assets/cardmedia/shape.svg'
export default function CirclewithBorder() {
  return (
    <div className="flex-wrapper">



      <div className="single-chart">

       
        <div className={`${styles.submaincicle} d-flex flex-column justify-content-center`}>
          <h3 className={styles.price}>382</h3>
          <h3 className={styles.secondtitle} >Sold</h3>
          <h3 className={styles.thirdtitle}>Out Of</h3>
          <h3 className={styles.lasttitle}>975</h3>
          <div className={`${styles.containerabsolute}`}>
          <div className={`${styles.containerwinthis}`}>
            <img className={`${styles.shapestyle}`} src={shape} />
            <h2 className={styles.winprize}>Win this</h2>
          </div>
        </div>
        </div>
        <svg viewBox="0 0 36 36" className="circular-chart orange">
          <path className="circle-bg"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className="circle"
            stroke-dasharray="30, 100"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>


      </div>
    </div>
  )
}
