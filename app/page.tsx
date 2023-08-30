import Image from 'next/image'
import styles from './page.module.css'
import Header from '../ui/landingComponents/header/header'
import WhyFiber from '../ui/landingComponents/whyFiber/whyFiber'


export default function Home() {
  return (
    <main 
    //  className={styles.main}
     >
      <Header/>
      <WhyFiber/>
    </main>
  )
}
