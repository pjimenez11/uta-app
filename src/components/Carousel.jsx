import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Carousel() {
  return (
    <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full h-[615px] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            
            <video
              className="w-full h-[615px] object-cover object-center"
              autoPlay
              loop
              muted
            >
              <source
                src="https://www.uta.edu.ec/v4.0/media/videos/2023/05/17/utavideofinal.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <h5 className="text-xl">Universidad Tecnica de Ambato</h5>
              <p>Formacion superior con liderazgo y proyección</p>
            </div>
            
              
            
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="absolute bg-black opacity-30 w-full h-[615px]"></div>
            <img
              src="https://fca.uta.edu.ec/v3.2/images/botonera_principal/servicios.png"
              className=" w-full h-[615px] object-cover object-center"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <h5 className="text-xl">Servicios </h5>
              <p>
                La UTA ofrece una amplia gama de
                servicios
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="absolute bg-black opacity-30 w-full h-[615px]"></div>
            <img
              src="https://deadv.uta.edu.ec/images/noticias/17_nov20_prensa_big.jpeg"
              className=" w-full h-[615px] object-cover object-center"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <h5 className="text-xl">Infrastructura</h5>
              <p>
                La UTA cuenta con una amplia infraestructura
                para el desarrollo de las actividades
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
