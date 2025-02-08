import React from 'react'

const Card = (props) => {

    
  return (
    <div className='card w-70 bg-zinc-200 rounded-md flex justify-center items-center flex-col p-4'>
        <img className='w-40 h-40 object-cover rounded-[50%] ' src={props.user.img} alt="" />
        <h1 className=''>{props.user.username}</h1>
        <h3 className=''>{props.user.age}, {props.user.city}</h3>
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, numquam!</p>
    </div>
  )
}

export default Card 