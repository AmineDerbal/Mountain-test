import { logo } from '../../assets';

const Header = () => {
  return (
    <header className="py-[10px] px-[20%] md:px-[2%] flex items-center justify-between md:justify-center md:gap-[0.5rem]">
      <div>
        <a href="#hero">
          <img
            src={logo}
            alt="Logo"
          />
        </a>
      </div>
      <nav>
        <ul className="my-[16px] pl-[30px] flex gap-[3rem] list-none text-white font-lato italic md:text-[0.75rem]">
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
