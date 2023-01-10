import { Grid } from '@mui/material'
import React from 'react'
import Dropdown from './Dropdown'
import { MenuProps } from './menus'

export interface Props {
    menus: MenuProps
  }

  const MenuItems = (menus: Props) => {
  return (
    <Grid>
      {
      menus.menus.submenus? 
      <Grid>
          <Grid className="cursor-pointer"> {menus.menus.title} </Grid>
          <Dropdown submenus={menus.menus.submenus} />
      </Grid> 
      : 
      <Grid>
        
        </Grid>
        }
    </Grid>
  )
}

export default MenuItems