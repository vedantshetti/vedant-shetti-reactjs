import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div className='h-full w-2/3 bg-blue-200 rounded-3xl flex items-center justify-start gap-6 px-8 overflow-hidden'>
            {props.users.map(function(elem,idx){
                return(
                    <RightCard key={idx} id={idx} img={elem.img} inrto={elem.inrto} tag={elem.tag}/>
                )
            })}
        </div>
    )
}

export default RightContent