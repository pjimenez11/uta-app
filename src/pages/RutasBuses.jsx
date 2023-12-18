import { useEffect } from "react";

export const RutasBuses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://www.lahora.com.ec/wp-content/uploads/2023/03/Buses-institucionales.jpg"
          alt="Rutas de Buses"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="flex gap-x-2">
            <div className="w-2  bg-japanese-maple-600"></div>
            <span className="lg:text-7xl text-5xl font-bold text-white">
              Rutas de Buses UTA
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <iframe
          src="https://uta.edu.ec/v4.0/images/noticias/Noticias2023/RutaBuses2023/RutaBuses2023.pdf"
          className="w-full md:w-3/4 "
          width="600"
          height="700"
        ></iframe>
      </div>
    </div>
  );
};
