import Head from 'next/head'
import { server } from '../config'
import BookingList from '../components/BookingList';
import styles from '../styles/Home.module.css'


export default function Home({bookings}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BookingList bookings={bookings} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/bookings`)
    const bookings = await res.json()

    return {
        props: {
            bookings
        }
    }
}
