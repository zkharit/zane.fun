import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>zane.fun</title>
        <meta name="description" content="my fun website!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <div className={utilStyles.centeredText}>
        Uh oh! Something went wrong (I'm trying to fix it!!), but check this out instead: <Link href="/post/christmas-btc" className={utilStyles.christmasLink}>Christmas BTC</Link>
      </div>
    </Layout>
  )
}
