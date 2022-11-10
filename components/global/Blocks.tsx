import React from 'react'
import {Grid} from '@mui/material'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import blocksBackground from '../../public/global/bg-blocks.jpg'

const cards = [
    {id: 1,
    icon: <SmartDisplayIcon className='icon'/>,
    name: 'Beta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/beta'
    },
    {id: 2,
    icon: <OfflineBoltIcon className='icon'/>,
    name: 'Gamma',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/gamma'
    },
    {id: 3,
    icon: <WhatsAppIcon className='icon'/>,
    name: 'Delta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/delta'
    },
    {id: 4,
    icon: <TravelExploreIcon className='icon'/>,
    name: 'Epsilon',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/epsilon'
    },
    {id: 5,
    icon: <BusinessCenterIcon className='icon'/>,
    name: 'Zeta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/zeta'
    },
    {id: 6,
    icon: <AssessmentIcon className='icon'/>,
    name: 'Eta',
    desc: 'Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.',
    path: '/eta'
    },
]
const Blocks: React.FC = () => {
  return (
    <div style={{backgroundImage: `url(${blocksBackground.src})`}} className='bg_image global_service_section w-full p-5 bg-gray-800'>
        <Grid container spacing={2} className="py-[3rem]">
           {cards.map((item) => (
             <Grid key={item.id} item xs={12} md={4} className="flex justify-center">
              <Link href={`${item.path}`}>
               <div className='global_service_block_container'>
                <div className='global_service_block face1 bg-stone-700 hover:bg-rose-900'>
                    <div className='global_service_block_content flex flex-col items-center justify-center p-4'>
                    <Avatar>
                    {item.icon}
                    </Avatar>
                        <h3 className='text-2xl text-slate-50'>{item.name}</h3>
                        <p className="mt-3 text-sm text-center text-slate-100">
                        {item.desc}
                        </p>
                    </div>
                  
                </div>
               </div>
              </Link>
             </Grid>
           ))}
        </Grid>
    </div>
  )
}

export default Blocks