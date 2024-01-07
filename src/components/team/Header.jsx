import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center ml-[20%] md:ml[10%]">
      <h2 className="mt-[1rem] text-[8rem] md:text-[4rem] font-oswald font-bold text-tertiary ">
        02.
      </h2>
      <div className="flex flex-col justify-end">
        <p className="ml-[-1.5rem] md:ml-[-1rem] mt-[1rem] md:mt-0 text-[2rem] md:text-[1rem] font-bold text-primary">
          CLIMB
        </p>
      </div>
      <p className="pl-[10px] pb-[30px] md:text-[0.8rem]">
        Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
      </p>
    </div>
  );
};

export default Header;
