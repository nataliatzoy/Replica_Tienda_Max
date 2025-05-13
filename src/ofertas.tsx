const Ofertas = () => {
  return (
    <>
      <section>
        <div className="bg-white w-full h-46 pt-26  ">
          {/* Div contenedor con las imágenes alineadas en fila */}
          <div className="flex flex-row justify-between items-center ">
            <div className=" w-full h-14 flex justify-center items-center  mx-8">
              <img
              src="https://www.max.com.gt/assets/max_diferenciador_home_lg_dm_1d7d0a4911.webp"
                alt=""
                className=" rounded-lg "
              />
            </div>
            <div className=" w-full h-14 flex justify-center items-center  mx-8">
              <img
                src="https://www.max.com.gt/assets/max_diferenciador_home_lg_ed_166e7cbfeb.webp"
                alt=""
                className="bg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

                {/*  */}
                {/*  */}

    </>
  );
};
export default Ofertas;
