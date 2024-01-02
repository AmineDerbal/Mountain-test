import Header from './Header';

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
              <p className="ml-[-1.5rem] md:ml-[-1rem] mt-[1rem] md:mt-[.5rem] text-[2rem] md:text-[1rem] font-bold text-primary">
                HISTORY
              </p>
            </div>
          </div>
          <p className="pl-[30%] md:pl-[25%] md:text-[0.8rem] w-[80%] mt[-0.5rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            voluptatibus aspernatur ex animi, at, consequuntur commodi omnis
            maxime error nesciunt provident? Molestias deleniti suscipit
            eveniet, ut rem saepe quaerat consequuntur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
