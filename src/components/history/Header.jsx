import { logo } from '../../assets';

const Header = () => {
  return (
    <header className="py-[10px] px-[20%] md:px-[2%] flex items-center justify-between md:justify-center md:gap-[0.5rem]">
      <div className="flex items-center gap-[5px]">
        <a href="#hero">
          <img
            src={logo}
            alt="Logo"
          />
        </a>
        <h3 className="font-bebasNeue md:text-[0.8rem] font-bold text-[1.17rem]">
          <span className="text-secondary">LOSANGELES </span> <br />
          <span className="text-primary">MOUNTAINS</span>
        </h3>
      </div>
      <nav>
        <ul className="my-[16px] pl-[30px] flex gap-[3rem] list-none font-lato italic font-bold text-primary md:text-[0.6rem]">
          <li>
            <a href="#history">01. HISTORY</a>
          </li>
          <li>
            <a href="#team">02. TEAM</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
