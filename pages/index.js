import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        Woweee!
        <Sidebar />
        <Feed />
        {/* widgets */}

        {/* modal */}
      </main>
    </div>
  )
}
