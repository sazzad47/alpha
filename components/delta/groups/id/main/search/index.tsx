import React from 'react'
import { Grid } from '@mui/material'
import Navbar from './Navbar'
import Results from './Results'
import SearchBar from './SearchBar'

const Search = () => {
  return (
    <Grid className="w-[calc(100%-30vw)] mt-[10vh] h-[calc(100%-10vh)] bg-bgLight dark:bg-bgDark flex flex-col">
        <Grid className="h-[10%] bg-[#e0d9d9] dark:bg-[#31363b]">
            <Navbar/>
        </Grid>
        <Grid className="h-[10%] flex items-center px-3">
          <SearchBar/>
        </Grid>
        <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
            <Results/>
        </Grid>
    </Grid>
  )
}

export default Search