import Head from 'next/head'
import { server } from '../config'
import BookingList from '../components/BookingList';
import styles from '../styles/Home.module.css'


export default function Home({numbers}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
            <BookingList numbers={numbers} />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`localhost/sf_booking_cancellation_report.json`)

    const numbers = await res.json()

    return {
        props: {
            numbers
        }
    }
}

// export const getStaticProps = async () => {
//     const res = await fetch(`${server}/api/numbers`)
//     const numbers = await res.json()
//
//     return {
//         props: {
//             numbers
//         }
//     }
// }
