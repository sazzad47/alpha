import React from 'react'
import {Grid} from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const cards = [
    {id: 1,
    icon: <PlayCircleFilledIcon className='icon'/>,
    name: 'Beta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/beta'
    },
    {id: 2,
    icon: <OfflineBoltIcon className='icon'/>,
    name: 'Gamma',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/gamma'
    },
    {id: 3,
    icon: <WhatsAppIcon className='icon'/>,
    name: 'Delta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/delta'
    },
    {id: 4,
    icon: <PlayCircleFilledIcon className='icon'/>,
    name: 'Beta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/beta'
    },
    {id: 5,
    icon: <PlayCircleFilledIcon className='icon'/>,
    name: 'Beta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/beta'
    },
    {id: 6,
    icon: <PlayCircleFilledIcon className='icon'/>,
    name: 'Beta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers. Thus, Beta is a great YouTube alternative.',
    path: '/beta'
    },
]
const Blocks = () => {
  return (
    <div className='w-full mt-2 p-5'>
        <Grid container spacing={4}>
           {cards.map((item) => (
             <Grid key={item.id} item xs={12} md={4} className="flex justify-center">
               <div className='global_service_block_container'>
                <div className='global_service_block face1'>
                    <div className='global_service_block_content flex flex-col items-center justify-center'>
                         {item.icon}
                        <h3>{item.name}</h3>
                    </div>
                  
                </div>
                <div className='global_service_block face2'>
                  <div className='global_service_block_content flex flex-col items-center justify-center'>
                        <p>
                        {item.desc}
                        </p>
                        <Link href={`${item.path}`}><button className='mt-3'>Explore</button></Link>
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