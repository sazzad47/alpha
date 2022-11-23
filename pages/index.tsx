import Head from 'next/head'
import React from 'react'
import Global from '../components/global'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTranslation from 'next-translate/useTranslation';


export default function Home() {
  const { t } = useTranslation('home');
  return (
    <React.Fragment>
      <div className='global'>
      <Head>
        <title>Home</title>
        <meta name="description" content="Six in One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {t('contact information -heading')} */}
      <Global />
      </div>
    </React.Fragment>
  )
}

// export async function getStaticProps({ locale = 'en' }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['home'])),
//     }
//   } 
// }