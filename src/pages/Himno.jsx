import { useEffect } from "react";
import himnouta from "../assets/himnouta.mp3";

export const Himno = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://csei.uta.edu.ec/csei2021/images/galeria-uta/uta.png"
          alt="Himno"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="flex gap-x-2">
            <div className="w-2  bg-japanese-maple-600"></div>
            <span className="lg:text-7xl text-5xl font-bold text-white">
              Himno de la UTA
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 lg:px-20">
        <div className="max-w-5xl mx-auto mt-14 p-6 bg-slate-100 dark:bg-neutral-700 rounded-md shadow-md">
          <div className="flex justify-center">
            <audio controls src={himnouta}></audio>
          </div>
          <div className="text-lg whitespace-pre-line">
            <p>
              <strong>Letra:</strong> Julio César Arias Vizcaíno
            </p>
            <p>
              <strong>Música:</strong> Floresmilo Viteri Ojeda
            </p>
            <div className="mt-4 text-center flex flex-col gap-5">
              <p>
                <strong>CORO</strong>
              </p>
              <p>
                Alma Mater, grandiosa en la ciencia
                <br /> en la técnica, el arte, el honor!
                <br /> De esta tierra ambateña, conciencia
                <br /> de hidalguia para el Ecuador.
              </p>
              <div className="flex justify-center flex-col md:flex-row">
                <div className="flex flex-col gap-y-5 md:w-1/2">
                  <p>
                    <strong>I</strong>
                  </p>
                  <p>
                    No prodigas poder ni riquezas
                    <br /> que convierten al hombre en tirano;
                    <br /> nos confieres la inmensa grandeza
                    <br /> de arrancarle respuesta al arcano
                    <br /> de grabar en la cumbre del Ande
                    <br /> tus lecciones de honor y de gloria
                    <br /> que refleje por siempre tu historia
                    <br /> de ser digna, ser noble, ser grande.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 md:w-1/2">
                  <p>
                    <strong>II</strong>
                  </p>
                  <p>
                    Son tus aulas abiertos paisajes,
                    <br /> en que anida la paz solidaria;
                    <br /> son tus hijos inmensas cisternas
                    <br /> donde fluye pasión libertaria;
                    <br /> tus lecciones son fuentes eternas
                    <br /> de inmortales y sabios mensajes.
                  </p>
                </div>
              </div>

              <p>
                <strong>III</strong>
              </p>
              <p>
                Tu destino es crecer en el tiempo:
                <br /> es sembrar la simiente fecunda
                <br /> de la técnica, el arte y la ciencia;
                <br /> ser trinchera, ser aula, ser templo;
                <br /> es forjar la irrompible conciencia
                <br /> de la fe libertaria y profunda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
