import { PiMagicWandFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const productosEjemplo = [
  {
    id: 1,
    marca: { nombre: "Dell", url: "#" },
    nombre:
      'Laptop Dell Inspiron 3535 de 15.6" FHD, Ryzen 3 7320U, 8GB RAM, 256GB SSD',
    precioAnterior: 4995,
    precio: 3197,
    descuento: 36,
    imagen:"https://backoffice.max.com.gt/media/catalog/product/1/2/12WWJ_1.png",
  },
  {
    id: 2,
    marca: { nombre: "Samsung", url: "#" },
    nombre: "Samsung Galaxy A35, Dual Sim, Liberado (Morado)",
    precioAnterior: 3695,
    precio: 1996,
    descuento: 46,
    imagen:
      "https://backoffice.max.com.gt/media/catalog/product/s/m/sma356elv-1.png",
  },
  {
    id: 3,
    marca: { nombre: "Whirlpool", url: "#" },
    nombre: "LAVADORA DE ROPA DE 57 LBS. BLANCA CON AGITADOR REMOVIBLE (2 EN 1)",
    precioAnterior: 5999,
    precio: 4997,
    descuento: 17,
    imagen:
      "https://backoffice.max.com.gt/media/catalog/product/8/M/8MWTW2654WRM_1.jpg",
  },
  {
    id: 4,
    marca: { nombre: "TUCO", url: "#" },
    nombre: "Sofá Cama Pop-Up Rip en L Café con Almacenaje Integrado y Cama 187×123 cm",
    precioAnterior: 10152,
    precio: 6598,
    descuento: 35,
    imagen:
      "https://backoffice.max.com.gt/media/catalog/product/f/f/ff63f3e5322041a9.png",
  },
  {
    id: 5,
    marca: { nombre: "JBL", url: "#" },
    nombre: "Bocina JBL Flip 6 Inalámbrica Resistente al Agua y Polvo (Verde)",
    precioAnterior: 1295,
    precio: 847,
    descuento: 35,
    imagen:
      "https://backoffice.max.com.gt/media/catalog/product/j/b/jblflip6grn.jpg",
  },
];

const CarrusellProductos = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex items-center gap-2 justify-between ">
            <span className="border-2 border-[#374151]  rounded-full px-2 py-1 text-[#374151] text-base flex items-center font-bold w-48 gap-2 ">
              <PiMagicWandFill className="w-5 h-5" />
              Días MAX Online
            </span>
          </div>
          <a
            href="#"
            className="text-gray-600 text-base font-semibold underline "
          >
            Ver todos
          </a>
        </div>
        {/* Carrusel */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2  hover:bg-neutral-300 cursor-pointer">
            <IoIosArrowBack />
          </button>
          {/* Productos */}
          <div className="flex space-x-6   px-8">
            {productosEjemplo.map((producto) => (
              <div
                key={producto.id}
                className="w-56 flex-none bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="h-36 flex items-center justify-center">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-32 object-contain"
                  />
                </div>
                <div className="px-3 pb-3">
                  <div className="text-xs text-gray-500 mb-1">
                    Marca:{" "}
                    <a
                      href={producto.marca.url}
                      className="text-blue-600 hover:underline"
                    >
                      {producto.marca.nombre}
                    </a>
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {producto.nombre}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                      -{producto.descuento}%
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      Q{producto.precioAnterior.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Q{producto.precio.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Flecha derecha */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white  rounded-full shadow p-2 hover:bg-neutral-300 cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrusellProductos;
