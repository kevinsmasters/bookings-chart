import Head from 'next/head'
import { server } from '../config'
import BookingList from '../components/BookingList';
import styles from '../styles/Home.module.css'


export default function Home({bookings, cancellations}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
            <BookingList bookings={bookings, cancellations} />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/bookings`)
    const res2 = await fetch(`${server}/api/cancellations`)
    const bookings = await res.json()
    const cancellations = await res2.json();

    return {
        props: {
            bookings, cancellations
        }
    }
}
