import { useEffect } from "react";

export const RendicionCuentas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://escuelafintech.com/wp-content/uploads/cuadro-de-cuentas.jpg"
          alt="Rendicion de Cuentas"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="flex gap-x-2">
            <div className="w-2  bg-japanese-maple-600"></div>
            <span className="lg:text-7xl text-5xl font-bold text-white">
              Informe de Rendición de Cuentas
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-3 text-japanese-maple-800 dark:text-neutral-50">
          Informe Rendición de Cuentas UTA 2022
        </h1>
        <iframe
          src="https://uta.edu.ec/v4.0/images/RendicionCuentasUTA2022/InformeRendicionCuentas20222.pdf"
          className="w-full md:w-3/4 "
          width="600"
          height="700"
        ></iframe>
      </div>
    </div>
  );
};
