import React from 'react'
import Blocks from './Blocks'
import Hero from './Hero'
import Reviews from './Reviews'
import Counter from './Counter'


const Global = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col w-full justify-center items-center'>
       <Hero/>
       <Blocks/>
       <Reviews/>
       <Counter/>
      </div>
    </React.Fragment>
  )
}

export default Global