import { useState, useEffect } from 'react';
import Header from './Header';

const Team = () => {
  const [background, setBackground] = useState(1);
  useEffect(() => {}, [background]);
  return (
    <section>
      <Header />
      <div className="bg-navBG px-[15%] md:hidden">
        <nav className="flex text-navText text-[22px]">
          <div
            className={`p-[1rem] h-[100%] cursor-pointer underline inline-block hover:bg-navText hover:text-navBG ${
              background === 1 ? 'bg-navText text-navBG' : ''
            }`}
          >
            <p onClick={() => setBackground(1)}>MOUNTAIN 1</p>
          </div>
          <div
            className={`p-[1rem] h-[100%] cursor-pointer underline inline-block hover:bg-navText hover:text-navBG ${
              background === 2 ? 'bg-navText text-navBG' : ''
            }`}
          >
            <p onClick={() => setBackground(2)}>MOUNTAIN 2</p>
          </div>
        </nav>
      </div>
      <div
        className={`min-h-screen bg-cover bg-no-repeat bg-center ${
          background === 1 ? 'bg-tab1' : 'bg-tab2'
        }`}
      ></div>
    </section>
  );
};

export default Team;
