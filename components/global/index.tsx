import React from 'react'
import Blocks from './Blocks'
import Hero from './Hero'
import Reviews from './Reviews'
import Counter from './Counter'
import Navbar from './Navbar'
import ContactForm from './ContactForm'


const Global: React.FC = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col w-full justify-center items-center'>
       <Navbar/>
       <Hero/>
       <Blocks/>
       <Reviews/>
       <Counter/>
       <ContactForm/>
      </div>
    </React.Fragment>
  )
}

export default Global