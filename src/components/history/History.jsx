import Header from './Header';
import { photo1, photo2 } from '../../assets';

const History = () => {
  return (
    <section id="history">
      <Header />
      <div className="min-h-screen bg-history bg-cover bg-no-repeat bg-center flex flex-col justify-between md:w-screen ">
        <div>
          <div className="ml-[20%] md:ml-[10%] flex items-center">
            <h2 className="text-[7rem] md:text-[4rem] text-tertiary font-bold font-oswald ">
              01.
            </h2>
            <div className="flex flex-col justify-e">
              <p className="ml-[-1.5rem] md:ml-[-1rem] mt-[.5rem] text-[2rem] md:text-[1rem] font-bold text-primary">
                HISTORY
              </p>
            </div>
          </div>
          <p className="pl-[30%] md:pl-[25%] md:text-[0.8rem] w-[85%] mt[-0.5rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            voluptatibus aspernatur ex animi, at, consequuntur commodi omnis
            maxime error nesciunt provident? Molestias deleniti suscipit
            eveniet, ut rem saepe quaerat consequuntur?
          </p>
        </div>
        <div className="bg-slider py-[1rem] px-[20%]">
          <div className="my-0 mx-auto flex w-fit gap-[1rem] flex-wrap justify-around">
            <img
              src={photo1}
              alt="1"
              className="w-[180px] h-[120px] object-fill"
            />
            <img
              src={photo2}
              alt="2"
              className="w-[180px] h-[120px] object-fill"
            />
            <img
              src={photo1}
              alt="1"
              className="w-[180px] h-[120px] object-fill"
            />
            <img
              src={photo2}
              alt="2"
              className="w-[180px] h-[120px] object-fill"
            />
          </div>
          <div className="text-center mt-[1rem] md:hidden">
            <span className="h-[15px] w-[15px] my-0 mx-[2px] bg-white inline-block cursor-pointer rounded-full"></span>
            <span className="h-[15px] w-[15px] my-0 mx-[2px] bg-dot inline-block cursor-pointer rounded-full"></span>
            <span className="h-[15px] w-[15px] my-0 mx-[2px] bg-dot inline-block cursor-pointer rounded-full"></span>
            <span className="h-[15px] w-[15px] my-0 mx-[2px] bg-dot inline-block cursor-pointer rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
