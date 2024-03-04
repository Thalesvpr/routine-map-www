import React, { FC } from 'react';

interface ButtonProps {
  value: string,
  className?: string
}
const commonStyle: string = 'py-2 px-7 m-2 rounded-full font-poppins '
export const RaisedButton: FC<ButtonProps> = (props: ButtonProps) => (
  <button className={`${commonStyle} text-neutral bg-contrast hover:bg-contrast-variant ${props.className}`}>
    <p className='text-md'>{props.value}</p>
  </button>
);
export const OutlineButton: FC<ButtonProps> = (props: ButtonProps) => (
  <button className={`${commonStyle}  outline-neutral text-neutral bg-transparent hover:outline outline-1 ${props.className}`}>
    <p className='text-sm'>{props.value}</p>
  </button>
);

