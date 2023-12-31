import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-hero bg-cover bg-no-repeat bg-top md:bg-center md:w-screen "
    >
      <Header />
    </section>
  );
};

export default Hero;
