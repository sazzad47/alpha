import { Grid } from '@mui/material'
import type { ReactNode } from 'react'
import Navbar from './navbar'
import { ThemeProvider } from "next-themes";
import React from 'react';

type Props = {
    children?: ReactNode
  }
const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
        <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
        </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout