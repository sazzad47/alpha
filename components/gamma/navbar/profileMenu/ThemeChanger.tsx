import React from 'react'
import {useTheme} from "next-themes";
import DropdownItem from './DropdownItem';
import DoneIcon from '@mui/icons-material/Done';
import { Grid } from '@mui/material';



const ThemeChanger = () => {
   
      const {systemTheme , theme, setTheme} = useTheme();
      const currentTheme = theme === "system" ? systemTheme : theme ;
     
      
  return (
    <React.Fragment>
        <Grid onClick={() => setTheme('dark')}>

         <DropdownItem doneIcon={currentTheme ==="dark"? <DoneIcon/>: null}  >Dark Theme</DropdownItem>
        </Grid>
        <Grid onClick={() => setTheme('light')}>
         <DropdownItem doneIcon={currentTheme ==="light"? <DoneIcon/>: null}  >Light Theme</DropdownItem>
        </Grid>
    </React.Fragment>
  )
}

export default ThemeChanger