import React, { FC } from 'react';
import { RaisedButton } from '../../../components/Button/Buttons.tsx';


interface CatalogProps {
  hueValue: number
}

const Catalog: FC<CatalogProps> = (props: CatalogProps) => (
  <div className='grid grid-cols-2 gap-4 w-full px-side'>
      <div className=' h-60 overflow-hidden rounded-3xl col-span-2 bg-[url("/public/card-iphone.jpg")] bg-cover'
    style={{filter: `hue-rotate(${props.hueValue}deg)`}}>
      <img className=' w-2/4 fixed -top-36 z-10 hover:-top-96 hover:w-7/12 transition-all duration-300 ease-in-out ' src='/apple-r-l.png' />
      <div className=' h-full w-full flex flex-col justify-center items-end pr-10'>
        <h2 className='text-neutral font-poppins text-3xl text-right'>Baixe agora o Louncher pra android</h2>
        <RaisedButton className=' ' value='Baixar Gratuitamente' />
      </div>
    
    </div>
    <div className=' bg-neutral rounded-3xl h-56'></div>
    <div className=' bg-neutral rounded-3xl'></div>
  </div>
);

export default Catalog;
