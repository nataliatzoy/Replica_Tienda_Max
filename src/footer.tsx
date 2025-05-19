
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#18191B] text-white font-inherit w-full h-full">
      <div className="flex justify-between flex-wrap px-[60px] py-[40px] pb-[20px]">
        <div className="mb-8 md:mb-0">
          <div className="font-extrabold text-3xl md:text-4xl mb-4 tracking-wider">MAX</div>
          <div className="mb-3 font-medium text-[#9ca3af]">Conecta con nosotros:</div>
          <div className="flex gap-4">
            <a href="#" className="text-white text-2xl" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-white text-2xl" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="text-white text-2xl" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>
        
        <div className="mb-8 md:mb-0 flex justify-between flex-col h-64">
          <div className="font-bold mb-3 text-[#9ca3af] text-sm">MAX</div>
          <div className="mb-2 font-semibold cursor-pointer">Tiendas</div>
          <div className="mb-2 font-semibold cursor-pointer">Puntos MAX</div>
          <div className="mb-2 font-semibold cursor-pointer">Viajes MAX</div>
          <div className="mb-2 font-semibold cursor-pointer">Bodas MAX</div>
        </div>
        
        {/* Soporte */}
        <div className="mb-8 md:mb-0 flex justify-between flex-col h-64">
          <div className="font-bold mb-3 text-[#9ca3af]">Soporte:</div>
          <div className="mb-2 font-semibold cursor-pointer">REPCEL</div>
          <div className="mb-2 font-semibold cursor-pointer">Servicio técnico</div>
          <div className="mb-2 font-semibold cursor-pointer">TECKI</div>
          <div className="mb-2 font-semibold cursor-pointer">Devoluciones</div>
        </div>
        
        {/* Información */}
        <div className="mb-8 md:mb-0 flex justify-between flex-col h-64">
          <div className="font-bold mb-3 text-[#9ca3af]">Información:</div>
          <div className="mb-2 font-semibold">info@distelsa.com.gt</div>
          <div className="mb-2 font-semibold">(502) 2423-0000</div>
          <div className="mb-2 font-semibold cursor-pointer">Condiciones de uso</div>
          <div className="mb-2 font-semibold cursor-pointer">Venta a empresas</div>
        </div>
      </div>
      
      <hr className=" text-white mx-10 mt-20" />
      
      <div className="text-start px-[40px]  text-sm text-[#b0b0b0] pt-12 pb-10 ">
        © 1961 - 2025 | Copyright Distribuidora Electrónica S.A.
      </div>
    </footer>
  );
};

export default Footer;
