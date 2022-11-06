import React, { ReactNode } from 'react'
import Navbar from './navbar'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
         <Navbar/>
        {children}
    </div>
  )
}

export default Layout