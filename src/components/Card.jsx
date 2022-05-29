import React from 'react'

const Card = props => {
  const {name, description, imgURL } = props.pokemon;
  return (
    <div className='bg-white rounded-lg flex flex-col items-center py-4'>
      <div className='bg-gray-200 w-[200px] h-[200px] border-2 border-gray-400 rounded-full flex justify-center'>      
        <img className='w-[60%]' src={imgURL}/>
      </div>
      <h1 className='font-bold text-4xl my-4'>{`${name}`}</h1>
      <p className='mx-6 text-center'>{description}</p>
    </div>
  )
}

export default Card;