import React from 'react'
import styles from './whyFiberStyles.module.css'
import WhyFiberItem from './whyFiberItem'
import time from "../../../public/Assets/time.svg";

export default function WhyFiber() {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Why Fiber</h2>
        <h1 className={styles.description}>A good portfolio means good employability.</h1>
        <div className={styles.itemsWrapper}>
            <WhyFiberItem 
                svg={time}
                title={'Build in minutes'}
                description={
                    'With a selection of premade templates, you can build a portfolio in less than 10 minutes.'
                }
            />
            <WhyFiberItem 
                svg={time}
                title={'Add custom CSS'}
                description={
                    'With a selection of premade templates, you can build a portfolio in less than 10 minutes.'
                }
            />
            <WhyFiberItem 
                svg={time}
                title={'Responsive'}
                description={
                    'With a selection of premade templates, you can build a portfolio in less than 10 minutes.'
                }
            />
        </div>
    </section>
  )
}
