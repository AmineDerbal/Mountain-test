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
      >
        <div className="relative top-[300px] left-[35%] w-fit p-[2rem] bg-white bg-opacity-50">
          <div>
            <h2 className="font-bold text-[3rem] text-primary">Schedule</h2>
            <p className="flex gap-[4rem]">
              <span> 25 Nov 2016</span> <span>Vestibulim</span>
            </p>
            <p className="flex gap-[4rem]">
              <span> 28 Nov 2016</span> <span>Vestibulim</span>
            </p>
            <p className="flex gap-[4rem]">
              <span> 18 Dec 2016</span> <span>Vestibulim</span>
            </p>
            <p className="flex gap-[4rem]">
              <span> 17 Jan 2017</span> <span>Vestibulim</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
