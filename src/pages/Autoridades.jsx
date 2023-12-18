import { useEffect } from "react";
import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

import { autoridades } from "../data/autoridades";

export const Autoridades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://www.utec.edu.sv/utec-boletines/uploads/boletines/75/imagen_contenido/-mg-0653.jpg"
          alt="Idiomas"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <div className="text-white w-2/4">
              <div className="flex gap-x-2">
                <div className="w-2 bg-japanese-maple-600"></div>
                <div className="">
                  <span className="sm:text-5xl text-3xl font-bold">
                    Universidad
                  </span>
                  <br />
                  <span className="sm:text-4xl text-2xl font-bold">
                    Técnica de Ambato
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/4 xs:h-14 sm:h-20 md:h-28 flex items-center rounded-lg justify-center bg-opacity-50 bg-white">
              <img
                src="https://www.uta.edu.ec/v4.0/images/UnidadArchivo/1_Excelencia.gif"
                alt="Exelecncia"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="mb-3 w-4/5">
          <TETabs fill>
            <TETabsItem
              onClick={() => handleFillClick("tab1")}
              active={fillActive === "tab1"}
              color="danger"
            >
              Autoridades
            </TETabsItem>
            <TETabsItem
              onClick={() => handleFillClick("tab2")}
              active={fillActive === "tab2"}
              color="danger"
            >
              Mision
            </TETabsItem>
            <TETabsItem
              onClick={() => handleFillClick("tab3")}
              active={fillActive === "tab3"}
              color="danger"
            >
              Vision
            </TETabsItem>
            <TETabsItem
              onClick={() => handleFillClick("tab4")}
              active={fillActive === "tab4"}
              color="danger"
            >
              Valores
            </TETabsItem>
          </TETabs>

          <TETabsContent>
            <TETabsPane show={fillActive === "tab1"}>
              <div className="flex flex-col items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {autoridades.map((autoridad) => (
                    <div
                      key={autoridad.nombre}
                      class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >
                      <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          class="rounded-t-lg w-full h-72 object-cover"
                          src={autoridad.img}
                          alt={autoridad.nombre}
                        />
                      </div>
                      <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          {autoridad.nombre}
                        </h5>
                        <p class="text-base text-neutral-600 dark:text-neutral-200">
                          {autoridad.cargo}
                        </p>
                      </div>
                      <ul class="w-full">
                        <li class="w-full border-b-2 border-japanese-maple-400 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                          {autoridad.telefono}
                        </li>
                        <li class="w-full border-b-2 border-japanese-maple-400 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                          <a
                            className="text-blue-900 dark:text-slate-300"
                            href="mailto:rv.barona@uta.edu.ec"
                          >
                            {autoridad.correo}
                          </a>
                        </li>
                        <li class="w-full  border-japanese-maple-400 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                          {autoridad.contacto}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TETabsPane>

            <TETabsPane show={fillActive === "tab2"}>
              <div className="flex items-center justify-center p-6">
                <img className="h-40" src="https://www.munillusco.gob.pe/imagenes/mision.png" />
                <p className="text-lg w-1/2">
                  La Universidad Técnica de Ambato, por sus niveles de
                  excelencia, se constituirá como un centro de formación
                  superior con liderazgo y proyección nacional e internacional.
                </p>
              </div>
            </TETabsPane>

            <TETabsPane show={fillActive === "tab3"}>
            <div className="flex items-center justify-center p-6">
                <img className="h-40" src="https://www.munillusco.gob.pe/imagenes/vision.png" />
                <p className="text-lg w-1/2">
                  Formar profesionales líderes competentes, con visión humanista
                  y pensamiento crítico a través de la Docencia, la
                  investigación y la Vinculación, que apliquen, promuevan y
                  difundan el conocimiento respondiendo a las necesidades del
                  país.
                </p>
              </div>
            </TETabsPane>

            <TETabsPane show={fillActive === "tab4"}>
              <div className=" flex items-center justify-center p-6">
                <ul className="list-disc text-lg md:w-4/6">
                  <li>
                    Laicidad: La Universidad respeta y garantiza la libertad de
                    pensamiento, expresión y culto de sus miembros, sin imponer
                    ni discriminar por ninguna creencia religiosa o ideológica.
                  </li>
                  <br />
                  <li>
                    Democracia: La Universidad promueve la participación activa
                    y pluralista de sus miembros en la toma de decisiones, el
                    respeto a las normas y el ejercicio de los derechos y
                    deberes ciudadanos.
                  </li>
                  <br />
                  <li>
                    Nacionalidad: La Universidad reconoce y valora la diversidad
                    cultural, étnica y lingüística del país, así como su
                    historia, identidad y soberanía.
                  </li>
                  <br />
                  <li>
                    Justicia social: La Universidad busca contribuir al
                    desarrollo humano integral, equitativo y solidario de la
                    sociedad, mediante la generación, aplicación y difusión del
                    conocimiento científico, tecnológico y humanístico.
                  </li>
                  <br />
                  <li>
                    Paz: La Universidad fomenta la convivencia pacífica, el
                    diálogo, la tolerancia y la solución pacífica de los
                    conflictos, tanto internos como externos.
                  </li>
                  <br />
                  <li>
                    Defensa de los derechos humanos y del medio ambiente: La
                    Universidad defiende y promueve el respeto a la dignidad, la
                    integridad y la libertad de las personas, así como la
                    protección y conservación de los recursos naturales y la
                    biodiversidad.
                  </li>
                </ul>
              </div>
            </TETabsPane>
          </TETabsContent>
        </div>
      </div>
    </div>
  );
};