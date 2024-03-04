import React, { FC } from 'react';
import Hero from './components/Hero.tsx';
import Header from './components/Header.tsx';
import Catalog from './components/Catalog.tsx';


interface LandingProps {}

function randonDeg30():number {
  const n = Math.floor(Math.random() * 12) + 1;
  return n * 30;
}
const currentHueValue = randonDeg30();
const Landing: FC<LandingProps> = () => (
  <main className=' relative'>
    <header>
      <Header hueValue={currentHueValue} />
    </header>
  <article className=' pt-16'>
  <Hero hueValue={currentHueValue} />
  <section>
    <Catalog hueValue={randonDeg30()}/>
  </section>
  </article>
  </main>
);

export default Landing;
