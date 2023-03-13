import Head from 'next/head'

import Banner from '@/components/banner'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center px-20">
        <Banner buttonText="View stores nearby" />
      </main>
      <footer></footer>
    </div>
  )
}
