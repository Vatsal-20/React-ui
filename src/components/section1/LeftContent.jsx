import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Aroow from './Aroow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between p-7 '>
        <HeroText />
        <Aroow />
    </div>
  )
}

export default LeftContent