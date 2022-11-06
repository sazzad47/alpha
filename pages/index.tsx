import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'


export default function Home() {
  return (
    <React.Fragment>
      <div className='global'>
      <Head>
        <title>Home</title>
        <meta name="description" content="Six in One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/beta"><Button variant='contained'>Beta</Button></Link>
      </div>
    </React.Fragment>
  )
}
