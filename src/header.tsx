import { IoIosSearch } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { GiBigDiamondRing } from "react-icons/gi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { TbProgressHelp } from "react-icons/tb";
import { RiTruckLine } from "react-icons/ri";

const HeaderMax = () => {
  return (
    <>
      <section>
        <nav className="bg-[#fe0000] w-full h-18 flex justify-center items-center">
          <div className="flex flex-row justify-between items-center w-[95%] max-w-7xl gap-5">
            <img
              src="https://guate502.com/wp-content/uploads/tiendas-max-logo.webp"
              alt=""
              className="w-20 h-18"
            />

            <div className="bg-[#d70000] w-36 h-10  flex   items-center text-white rounded-lg justify-center">
              <PiSquaresFourFill className="text-2xl" />
              <p className="text-lg">Categorías</p>
            </div>

            <div className="bg-white w-5/12 h-10 flex items-center rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white flex-grow outline-none px-4"
              />
              <button
                type="submit"
                className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-full"
              >
                <IoIosSearch className="w-5 h-5" />
              </button>
            </div>

            <button className="bg-[#111827] gap-2 w-62 h-10 flex items-center rounded-full overflow-hidden cursor-pointer text-white">
              <div className="flex flex-row justify-center items-center w-full h-full">
                <PiMapPinAreaFill className="text-white text-xl" />
                <p className="pl-2">Tu ubicación:</p>
                <p className="font-bold pl-1">Guatemala...</p>
                <IoIosArrowForward />
              </div>
            </button>

            <div className="gap-2 w-32 h-10 flex items-center justify-center rounded-full overflow-hidden cursor-pointer text-white text-2xl">
              <IoPersonCircleSharp className="" />
              <p className="text-sm font-bold">Mi cuenta</p>
            </div>

            <div className="relative flex items-center cursor-pointer text-white text-base">
              <MdShoppingCart className="text-xl" />
              <span className="absolute top-[-9px] right-13 bg-black text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
              <p className="ml-2 font-bold">Carrito</p>
            </div>
          </div>
        </nav>

        <nav className=" flex flex-row justify-between w-full h-16 items-center">
          <div className="w-8/12 flex justify-around mx-6">
            <ul className="w-full flex flex-row items-center  text-base justify-between font-semibold text-slate-700 ">
              <li className="flex items-center gap-1 hover:text-slate-500">
                <BiSolidOffer />
                Ofertas
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <RiShoppingBag4Line />
                Marcas
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <BsShopWindow />
                Tienda
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <MdMenuBook />
                Catálogo
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <LuTag />
                Puntos MAX
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <GiBigDiamondRing />
                Bodas MAX
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500">
                <BiSolidPlaneAlt />
                Viajes MAX
              </li>
              <li className="flex items-center gap-1 hover:text-slate-500 ">
                <TbProgressHelp />
                Servicios Max
              </li>
            </ul>
          </div>
          <div className="mx-8 w-2/12">
            <div className="gap-2 flex-1 h-10 flex items-center justify-center rounded-full overflow-hidden cursor-pointer text-black text-lg border border-black">
              <RiTruckLine className="text-base" />
              <p className="font-bold">Rastrear Pedido</p>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default HeaderMax;
