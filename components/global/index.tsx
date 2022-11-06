import React from 'react'
import Blocks from './Blocks'
import Hero from './Hero'


const Global = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col w-full justify-center items-center'>
       <Hero/>
       <Blocks/>
      </div>
    </React.Fragment>
  )
}

export default Global