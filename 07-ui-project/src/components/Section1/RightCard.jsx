import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-[85%] w-72 rounded-4xl overflow-hidden relative shadow-2xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-linear-to-t from-amber-400/90 via-amber-300/40 to-transparent p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold shadow'>{(props.id+1)}</h2>
        <div className='flex flex-col gap-3'>
          <p className='text-base font-semibold text-gray-900'>{props.inrto}</p>
          <div className='flex gap-2'>
            <button className='bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium'>{props.tag}</button>
            <button className='bg-blue-600 text-white px-4 py-2.5 rounded-full text-sm font-medium'><i className='ri-arrow-right-line'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard