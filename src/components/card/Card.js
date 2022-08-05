import React, { useState } from 'react'
import CirclewithBorder from '../CirclewithBorder/CirclewithBorder'
import h2hhoodie from './../../assets/cardmedia/h2hhoodie.png'
import mercedes from './../../assets/cardmedia/mercedes.png'
import styles from './card.module.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
export default function Card() {

const [counter,setcounter]=useState(1);

    return (
        <div className={`container text-center ${styles.maincontainer}  `} style={{ marginTop: '200px' }}>

            <div className={`row p-0 shadow position-relative  ${styles.cardparent}`}>

                <div className={styles.rightexternalicons}>
                </div>
                <div className={styles.rightexternaliconsfront}>
                    <AiOutlinePlusCircle className={styles.plusicon} onClick={()=>setcounter(prev=>prev+1)} />
                    <label className={styles.counter}>{counter}</label>
                    <AiOutlineMinusCircle className={styles.minusicon} onClick={()=>setcounter(prev=>prev-1)} />

                </div>


                <CirclewithBorder />


                <div className={styles.rightinternalicons}>
                    <AiOutlineHeart className={styles.hearticon} />
                    
                    <AiOutlineShoppingCart className={styles.shoppingcarticon} />
                </div>




                <div className={styles.price}>
                    AED 50.00
                </div>
                <div className='col p-0 '>
                    <div className={`card  ${styles.mycard}`} >
                        <img src={h2hhoodie} className={`card-img-top ${styles.cardimg}`} alt="..." />
                        <div className="card-body p-0">
                            <h5 className={`card-title ${styles.h2htitle}`}> Buy a</h5>
                            <span className={`${styles.secondarytitle}`}>H2H Hoodie</span>
                            <p className={`card-text ${styles.description}`}>A classic look with a timeless message, the H2H Hoodie is about
                                empowering the individual to make a positive social change. The design
                                also represnts the passion of the brand, our dedication to style.</p>
                        </div>
                    </div>


                </div>
                <div className='col p-0 bg-white'>
                    <div className={`card mercedes ${styles.mycard}`} >
                        <img src={mercedes} className={`card-img-top ${styles.cardimg}`} />
                        <div className="card-body p-0">
                            <h5 className={`card-title ${styles.mercedestitle}`}>Get a chance to win:</h5>
                            <span className={`${styles.secondarytitle}`}>
                                The all new Mercedes G63 AMG 2020
                            </span>
                            <p className={`card-text ${styles.description}`}>The all new 2020 Mercedes AMG G63 is a legend raised to a higher power for a new eral Whether facing mud,water,or mountains</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
