import React from 'react'
import styles from './headerStyles.module.css'
// import Image from 'next/image'
import Button from '../../button/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1>Create your portfolio in minutes.</h1>
            <p>
                With Fiber, you can set up your own personal portfolio
                in minutes with dozens of premade, beautiful templates.
            </p>
            <div className={styles.actionsWrapper}>
                <Button>Start Free Trial</Button>
                <Link href="/" >View examples</Link>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            {/* <Image
                className={styles.heroImage}
                src="/Assets/hero-illustration.png"
                alt="hero"
                // layout='fill'
                // objectFit='contain'
                width={'100%'}
                height={'100%'}
                priority
            /> */}
            <img 
                className={styles.heroImage} 
                src="/Assets/hero-illustration.png" alt="hero"
            />
        </div>
    </section>
  )
}
