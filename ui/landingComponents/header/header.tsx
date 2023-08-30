import React from 'react'
import styles from './headerStyles.module.css'
import Image from 'next/image'
import Button from '../../button/Button'
import Link from 'next/link'
import Star from "../../../public/Assets/star.svg";
import Checkmark from "../../../public/Assets/Checkmark.svg";

export default function Header() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <div className={styles.rateWrapper}>
            <div className={styles.starsWrapper}>
            <Image src={Star} alt={"star"}/>
            <Image src={Star} alt={"star"}/>
            <Image src={Star} alt={"star"}/>
            <Image src={Star} alt={"star"}/>
            <Image src={Star} alt={"star"}/>
            </div>
            <p className={styles.rateText}>Rated 4.8/5 (243)reviews</p>
        </div>
            <h1 className={styles.title}>Create your portfolio in minutes.</h1>
            <p className={styles.description}>
                With Fiber, you can set up your own personal portfolio
                in minutes with dozens of premade, beautiful templates.
            </p>
            <div className={styles.actionsWrapper}>
                <Button>Start Free Trial</Button>
                <Link className={styles.link} href="/" >View examples</Link>
            </div>
            <div className={styles.freeItemsWrapper}> 
                <div className={styles.freeItem}>
                <Image
                     src={Checkmark}
                      className={styles.icon}
                      alt='checkmark'
                      />
                    <p className={styles.freeItemDescription}>No Credit Card Required</p>
                </div>
                <div className={styles.freeItem}>
                    <Image
                     src='/Assets/Checkmark.svg'
                      className={styles.icon}
                      width={'25'}
                      height={'25'}
                      alt='checkmark'
                      />
                    <p className={styles.freeItemDescription}>10 Free Templates</p>
                </div>
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
