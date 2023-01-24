import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function About() {
  return <div>about page
    <Link href="/" className={styles.card}>Go back</Link>
  </div>
}
