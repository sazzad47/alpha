import React from 'react'
import {Grid, Card, Typography} from '@mui/material'
import logo from '../../public/logo.png'
import Image from 'next/image'

const cards = [
    1, 2, 3, 4, 5, 6
]
const Blocks = () => {
  return (
    <div className='w-full mt-5'>
        <Grid container spacing={2}>
           {cards.map((item, i) => (
             <Grid key={i} item xs={12} md={4} className="flex justify-center mt-5">
               <div className='global_service_block_container'>
                <div className='global_service_block face1'>
                  <div className='global_service_block_content'>
                    
                  </div>
                </div>
                <div className='global_service_block face2'>

                </div>
                 
               </div>
             </Grid>
           ))}
        </Grid>
    </div>
  )
}

export default Blocks