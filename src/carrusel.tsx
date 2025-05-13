import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carrusel = () => {
  return (
    <>
      <section className="">
        <div className="w-full h-80 ">
          <img
            src="https://s.zkcdn.net/Advertisers/b2a95db79bb5452784d815201323f844.webp"
            alt=""
          />

          <div className=" w-10 h-10 absolute top-70 left-320 flex items-center justify-center  ">
            <button className=" text-sm  bg-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-neutral-300 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>

          <div className=" w-10 h-10 absolute top-70 right-320 flex items-center justify-center  ">
            <button className=" text-sm  bg-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-neutral-300 cursor-pointer">
              <IoIosArrowBack />
            </button>
          </div>
        </div>
      </section>

      
    </>
  );
};
export default Carrusel;
