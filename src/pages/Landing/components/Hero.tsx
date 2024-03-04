import React, { FC } from 'react';
import {RaisedButton} from '../../../components/Button/Buttons.tsx';


interface HeroProps {
  hueValue: number
}

const Hero: FC<HeroProps> = (props: HeroProps) => (
    <div className='w-auto h-screen p-8'>
      <div className="hero font-poppins h-5/6 w-auto rounded-4xl bg-[url('/public/hero-banner.jpg')] bg-cover"
       style={{filter: `hue-rotate(${props.hueValue}deg)`}}>
      <div className=' w-full h-full flex justify-end items-center flex-col'>
          <div className=' text-center fixed h-full flex flex-col justify-center items-center'>
          <h1 className=' text-neutral text-5xl'>
          Organize suas tarefas e compromissos
        </h1>
        <h3 className=' text-neutral text-lg'>
          Organize suas tarefas e compromissos
        </h3>
          </div>
        <RaisedButton className=' mb-10' value='Começe de graça' />
        </div>  
      </div>
  </div>

);

export default Hero;
