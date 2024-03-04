import React, { FC } from 'react';
import { OutlineButton } from '../../../components/Button/Buttons.tsx';


interface HeaderProps {
  hueValue: number
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <div className=' w-full h-20 fixed z-50'>
    <div className=' flex w-auto h-full justify-between px-side items-center'>
      <img className=' h-12' src='/routine-map-logo-h.png' alt='routine-logo' style={{filter: `hue-rotate(${props.hueValue}deg)`}}/>
      <div className='row'>
        <OutlineButton value='Contato' />
        <OutlineButton value='Login' />
        <OutlineButton value='Começe de graça' />
      </div>
    </div>
  </div>
);

export default Header;
