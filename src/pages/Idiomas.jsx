import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Idiomas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://static.wixstatic.com/media/e83f6c_d72cf459bb4c43e9bc3a95f94132a2e1~mv2.jpg/v1/fill/w_1225,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e83f6c_d72cf459bb4c43e9bc3a95f94132a2e1~mv2.jpg"
          alt="Idiomas"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white dark:bg-opacity-0 bg-opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <div className="text-white w-2/4">
              <div className="flex gap-x-2">
                <div className="w-2 bg-japanese-maple-600"></div>
                <div className="">
                  <span className="sm:text-5xl text-3xl font-bold">
                    Admisiones
                  </span>
                  <br />
                  <span className="sm:text-3xl text-2xl">Idiomas</span>
                </div>
              </div>
              <br />
              <br />
              <p className="hidden md:block text-white text-2xl">
                Los estudiantes del Programa Abierto de Idiomas deben realizar
                el registro de usuario en "Idiomas Programa Abierto"
              </p>
            </div>
            <div className="w-1/4 flex items-center justify-center">
              <NavLink
                to="/idiomas/matricularme"
                className="text-white  bg-japanese-maple-700 dark:text-white dark:bg-japanese-maple-900 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Matricularme
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-3">
          Curso de Inglés: Modalidad Híbrida
        </h1>

        <video width={1000} controls>
          <source
            src="https://servicios.uta.edu.ec/matriculas2/docs/VIDEO-2023-08-28-10-32-02.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="flex flex-wrap  dark:bg-slate-800 bg-slate-300 mt-8">
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 ">
          <h1 className="text-2xl font-bold ">INSCRIPCIONES</h1>
          <p className="">
            <b>Inscripciones Ordinarias 26 al 28 de septiembre de 2023:</b>{" "}
            Programa Abierto
          </p>
          <p className="">
            <b>Inscripciones Ordinarias 25 de septiembre de 2023 </b>
            Programa de inglés para niños entre 9 a 11 años de edad
          </p>
          <p className="">
            <b>Inscripciones Ordinarias 26 de septiembre de 2023 </b>
            Programa Abierto: Nivel A1 – A2 Idioma Inglés. Modalidad En Línea
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-x-2 md:border-y-0 border-y-2 border-slate-950 dark:border-white">
          <h1 className="text-2xl font-bold">MATRICULAS</h1>
          <p className="">
            <b>
              8º, 9º, 10º semestre de la carrera y estudiantes fuera de carrera:
            </b>{" "}
            28 de septiembre de 2023 (de 09:00 a 10:00)
          </p>
          <p className="">
            <b>5º, 6º, y 7º semestre de la carrera </b>
            28 de septiembre de 2023 (de 10:10 a 11:00)
          </p>
          <p className="">
            <b>2º, 3º y 4º semestre de la carrera </b>
            28 de septiembre de 2023 (de 11:10 a 12:00)
          </p>
          <p className="">
            <b>
              1º, 2º, 3º, 4º, 5º, 6º, 7º, 8º, 9º y 10º semestre de la carrera y
              estudiantes fuera de carrera{" "}
            </b>
            28 de septiembre de 2023 (de 12:10 a 13:00)
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-r-2 md:border-y-0 border-b-2 border-slate-950 dark:border-white">
          <h1 className="text-2xl font-bold">MODALIDAD</h1>
          <p className="">Presencial</p>
          <p className="">Virtual</p>
          <p className="">Híbrida</p>
          <p className="">Semi-presencial</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5">
          <h1 className="text-2xl font-bold">COMISIÓN ACADÉMICA</h1>
          <p className="">
            <b>Directora Centro de Idiomas</b>
            <br />
            Mg. Miryan Salazar
            <br />
            <b>Correo: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="mailto:idiomas@uta.edu.ec"
            >
              idiomas@uta.edu.ec
            </a>
          </p>
          <p className="">
            <b>Responsable Unidad Académica</b>
            <br />
            Mg. Viviana Barona
            <br />
            <b>Correo: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="mailto:rv.barona@uta.edu.ec"
            >
              rv.barona@uta.edu.ec
            </a>
          </p>
          <p className="">
            <b>Responsable Unidad Evaluación</b>
            <br />
            Mg. Ana Cristina Ortiz
            <br />
            <b>Correo: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="mailto:ac.ortiz@uta.edu.ec"
            >
              ac.ortiz@uta.edu.ec
            </a>
          </p>
          <p className="">
            <b>Responsable Unidad Planificación</b>
            <br />
            Mg. Nelly Galora
            <br />
            <b>Correo: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="mailto:np.galora@uta.edu.ec"
            >
              np.galora@uta.edu.ec
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-3">
          Cronograma de Inscripciones y Matrículas
        </h1>
        <iframe
          src="https://servicios.uta.edu.ec/matriculas/docs/programacionCI20232024.pdf"
          className="w-full md:w-3/4 "
          width="600"
          height="700"
        ></iframe>
      </div>
    </div>
  );
};
