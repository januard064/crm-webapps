import Head from 'next/head'
import Image from 'next/image'

import '@/styles/globals.css'


// import components
import TopNavBar from '@/components/top-navbar/top-navbar'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavBar />

        <Layout>
          <Component {...pageProps} />
        </Layout>

      </main>


    </>
  )

}
