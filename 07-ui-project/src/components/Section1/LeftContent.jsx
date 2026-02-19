         import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'
         
         const LeftContent = () => {
           return (
            <div className='h-full flex flex-col justify-between w-1/4 '>
                
                <Hero/>
                <Arrow/>
            </div>
           )
         }
         
         export default LeftContent