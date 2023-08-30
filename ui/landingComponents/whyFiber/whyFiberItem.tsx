import React from 'react'
import styles from './whyFiberItemStyles.module.css'
import Image from 'next/image'

interface WhyFiberProps {
    svg: string;        // The source URL for the SVG image
    title: string;      // The title of the component
    description: string; // The description of the component
  }

export default function WhyFiber({svg,title,description}:WhyFiberProps) {
  return (
    <div className={styles.container}>
        <Image
            alt=''
            src={svg} 
        />
        <h3 className={styles.title}>
            {title}
        </h3>
        <p className={styles.description}>
            {description}
        </p>
    </div>
  )
}
