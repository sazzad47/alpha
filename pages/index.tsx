import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Global from '../components/global'


export default function Home() {
  return (
    <React.Fragment>
      <div className='global'>
      <Head>
        <title>Home</title>
        <meta name="description" content="Six in One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Global/>
      </div>
    </React.Fragment>
  )
}
