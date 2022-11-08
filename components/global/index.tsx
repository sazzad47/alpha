import React from 'react'
import Blocks from './Blocks'
import Hero from './Hero'
import Reviews from './Reviews'


const Global = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col w-full justify-center items-center'>
       <Hero/>
       <Blocks/>
       <Reviews/>
      </div>
    </React.Fragment>
  )
}

export default Global