import React from 'react'
import {Grid, Card, Typography} from '@mui/material'
import logo from '../../public/logo.png'
import Image from 'next/image'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const cards = [
    1, 2, 3, 4, 5, 6
]
const Blocks = () => {
  return (
    <div className='w-full mt-2 p-5'>
        <Grid container spacing={4}>
           {cards.map((item, i) => (
             <Grid key={i} item xs={12} md={4} className="flex justify-center">
               <div className='global_service_block_container'>
                <div className='global_service_block face1'>
                    <div className='global_service_block_content flex flex-col items-center justify-center'>
                        <PlayCircleFilledIcon className='icon' />
                        <h3>Beta</h3>
                    </div>
                  
                </div>
                <div className='global_service_block face2'>
                  <div className='global_service_block_content flex flex-col items-center justify-center'>
                        <p>
                        Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, DTube is a great YouTube alternative.
                        </p>
                   </div>
                </div>
                 
               </div>
             </Grid>
           ))}
        </Grid>
    </div>
  )
}

export default Blocks