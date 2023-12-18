import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Posgrados = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="relative h-[500px]">
        <img
          src="https://posgrado.uta.edu.ec/v4.0/images/logowebcentroposgrados.png"
          alt="Posgrados"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white dark:bg-opacity-0 bg-opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div className="text-white w-2/4">
              <div className="flex gap-x-2">
                <div className="w-2 bg-japanese-maple-600"></div>
              </div>
              <br />
              <br />
            </div>
            <div className="flex items-center mt-40">
              <NavLink
                to="https://postulacionestudiantes.uta.edu.ec/postulations/index"
                className="text-white bg-japanese-maple-700 dark:text-white dark:bg-japanese-maple-900 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                POSTÚLATE ¡YA!
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center bg-gray-200 py-4 px-6">
        <ul className="flex">
          <li className="ml-6">
            <a
              href="#MisionVision"
              className="text-gray-700 hover:text-gray-900"
            >
              Misión - Visión
            </a>
          </li>
          <li className="ml-6">
            <a href="#Director" className="text-gray-700 hover:text-gray-900">
              Director Centro de Posgrados
            </a>
          </li>
          <li className="ml-6">
            <a href="#Contactos" className="text-gray-700 hover:text-gray-900">
              Directorio de Contactos
            </a>
          </li>
          <li className="ml-6">
            <a href="#Oferta" className="text-gray-700 hover:text-gray-900">
              Oferta Académica
            </a>
          </li>
          <li className="ml-6">
            <a href="#Sistemas" className="text-gray-700 hover:text-gray-900">
              Sistemas Posgrados
            </a>
          </li>

          <li className="ml-6">
            <a href="#Programas" className="text-gray-700 hover:text-gray-900">
              Programas en Inscripción
            </a>
          </li>

          <li className="ml-6">
            <a href="#Aranceles" className="text-gray-700 hover:text-gray-900">
              Aranceles Universitarios
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-3">CENTRO DE POSGRADOS</h1>
      </div>

      <section id="MisionVision">
        <div className="flex flex-col justify-center items-center px-5 pb-5">
          <h1 className="text-4xl font-bold mb-3">Misión - Visión</h1>

          <p className="max-w-5xl text-center">
            Una clara visión de la Universidad que deseamos para el futuro es la
            línea de liderazgo indispensable para determinar las acciones y
            proyectos que se deben fortalecer, así como aquellos que se deben
            iniciar para avanzar con rapidez y solidez en esa dirección. En el
            corto plazo es posible observar algunos resultados, pero la mayoría
            de ellos servirán como plataforma para algunos proyectos a futuro,
            los proyectos que deben emprenderse no son los que den frutos
            inmediatos sino los que contribuyan en mayor medida a la
            consolidación que la universidad demanda.
          </p>
          <br />
          <p className="max-w-5xl text-center">
            El sistema de Posgrado de la UTA debe consolidarse como uno de los
            mejores del país en términos de calidad, diversidad y respuesta a
            los requerimientos del sistema de Educación Superior y de los
            sectores productivo, social y gubernamental. Un sistema que mediante
            un crecimiento sostenido permita establecer programas de maestría en
            todas las unidades académicas de la Universidad, programas de
            doctorado de cuarto nivel que permitan formar doctores que necesitan
            las Instituciones de Nivel Superior, un sistema de posgrado flexible
            en que tanto estudiantes como docentes puedan acceder a toda la
            riqueza y variedad de programas que ofrezca la institución con
            calidad, y excelencia. Este sistema debe integrar los esfuerzos de
            las Unidades Académicas y asegurar el uso pleno de la
            infraestructura universitaria, así como también garantizar la
            participación de los mejores académicos de la universidad.
          </p>
        </div>
      </section>

      <section id="Director">
        <div className="flex flex-col justify-center items-center p-5 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Director Centro de Posgrados
          </h1>
          <h1 className="text-2xl font-bold mb-3">
            {" "}
            Dr. Héctor Fernando Gómez Alvarado{" "}
          </h1>
        </div>

        <div className="lg:flex lg:ml-5 items-center lg:p-0 p-5 justify-center">
          <img
            src="https://posgrado.uta.edu.ec/v4.0/images/IMG_1370.jpg"
            alt="Dr. Héctor Fernando Gómez Alvarado"
            className="max-w-full h-auto lg:max-w-xs lg:h-auto"
          />
          {/* Agregué clases 'max-w-full' y 'h-auto' para ajustar el tamaño de la imagen en pantallas pequeñas */}
          {/* Agregué clases 'lg:max-w-xs' y 'lg:h-auto' para ajustar el tamaño de la imagen en pantallas grandes */}
          <div className="flex flex-col lg:gap-y-6 gap-y-2 text-center lg:text-start lg:mt-0 mt-2 lg:ml-5">
            <div className="text-box">
              <b>Horario de Atención</b>
              <p>Lunes a Viernes 08h30 a 12h30 y de 14h30 a 18h30</p>
            </div>
            <div className="text-box">
              <b>Dirección</b>
              <p>
                Av. Los Chasquis y Rio Guayllabamba - Edificio de Ciencias
                Básicas - Campus Huachi
              </p>
            </div>
            <div className="text-box">
              <b>Correo Electrónico</b>
              <p>hf.gomez@uta.edu.ec</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Contactos">
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-4xl font-bold mb-3">Directorio de Contactos</h1>
          <div className="flex flex-wrap  dark:bg-slate-800 bg-slate-300 mt-8">
            <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 ">
              <h1 className="text-2xl font-bold">CENTRO DE POSGRADOS</h1>
              <p className="">
                <b>Asistentes Administrativos</b>
                <br />
                Ing. Recillo Trujillo Shirley Michell
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href=" sm.recillo@uta.edu.ec"
                >
                  sm.recillo@uta.edu.ec
                </a>
              </p>
              <p className="">
                <br />
                Lic. Mg. Flores Calle Nila Fernanda
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="nf.flores@uta.edu.ec"
                >
                  nf.flores@uta.edu.ec
                </a>
              </p>
              <p className="">
                <br />
                Ing. Guerra Rosales Byron Omar
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="bo.guerra@uta.edu.ec"
                >
                  bo.guerra@uta.edu.ec
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-x-2 md:border-y-0 border-y-2 border-slate-950 dark:border-white">
              <h1 className="text-2xl font-bold">
                Coordinación Facultad de Ciencias Administrativas
              </h1>
              <p className="">
                <b>Coordinador de Posgrado</b>
                <br />
                Ing. Mg. Paredes Alvarez Viviana Monserrath
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="  vm.paredes@uta.edu.ec"
                >
                  vm.paredes@uta.edu.ec
                </a>
              </p>
              <p className="">
                <br />
                Ing. Grijalva Medina Micaela Carolina
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="mc.grijalva@uta.edu.ec"
                >
                  mc.grijalva@uta.edu.ec
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-r-2 md:border-y-0 border-b-2 border-slate-950 dark:border-white">
              <h1 className="text-2xl font-bold">
                Coordinación Facultad de Ciencias Humanas y de la Educación
              </h1>
              <p className="">
                <b>Coordinadores de Posgrado</b>
                <br />
                Ing. Mariño Ordóñez Johana Elizabeth
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="  je.marino@uta.edu.ec"
                >
                  je.marino@uta.edu.ec
                </a>
              </p>
              <p className="">
                <br />
                Ing. López Arias Nicole Estefanía
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href=" ne.lopez@uta.edu.ec"
                >
                  ne.lopez@uta.edu.ec
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/4 p-5">
              <h1 className="text-2xl font-bold">
                Coordinación Facultad de Ingeniería Civil y Mecánica
              </h1>
              <p className="">
                <b>Coordinador de Posgrado</b>
                <br />
                Psic. Landazuri Saltos Carola de los Angeles
                <br />
                <b>Contacto: </b>
                <a
                  className="text-blue-600 dark:text-japanese-maple-600"
                  href="  cdla.landazuri@uta.edu.ec"
                >
                  cdla.landazuri@uta.edu.ec
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap  dark:bg-slate-800 bg-slate-300 mt-8">
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 ">
          <h1 className="text-2xl font-bold">
            Coordinación Facultad de Contabilidad y Auditoria
          </h1>
          <p className="">
            <b>Coordinadores de Posgrado</b>
            <br />
            Ing. Mg. Freire Nieto Mayra Elizabeth
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href=" me.freire@uta.edu.ec"
            >
              me.freire@uta.edu.ec
            </a>
          </p>
          <p className="">
            <br />
            Ing. Santana Rojas Fernando Mauricio
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href=" fm.santanar@uta.edu.ec"
            >
              fm.santanar@uta.edu.ec
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-x-2 md:border-y-0 border-y-2 border-slate-950 dark:border-white">
          <h1 className="text-2xl font-bold">
            {" "}
            Coordinación Facultad de Arquitecturas y Artes
          </h1>
          <p className="">
            <b>Coordinador de Posgrado</b>
            <br />
            Abg. Torres Villacis Dario Javier
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="  dj.torres@uta.edu.ec"
            >
              dj.torres@uta.edu.ec
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5 md:border-r-2 md:border-y-0 border-b-2 border-slate-950 dark:border-white">
          <h1 className="text-2xl font-bold">
            {" "}
            Coordinación Facultad de Ciencias de la Salud
          </h1>
          <p className="">
            <b>Coordinadores de Posgrado</b>
            <br />
            Ing. Martinez Angulo Genesis Yazmin
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href=" gy.martinez@uta.edu.ec"
            >
              gy.martinez@uta.edu.ec
            </a>
          </p>
          <p className="">
            <br />
            Ing. Parra Pintado Monica Del Carmen
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="mcparra@uta.edu.ec"
            >
              mcparra@uta.edu.ec
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/4 p-5">
          <h1 className="text-2xl font-bold">
            {" "}
            Coordinación Facultad de Ingeniería en Alimentos y Biotecnología
          </h1>
          <p className="">
            <b>Coordinador de Posgrado</b>
            <br />
            Ing. Sánchez Hidalgo Carolina Priscila
            <br />
            <b>Contacto: </b>
            <a
              className="text-blue-600 dark:text-japanese-maple-600"
              href="  cp.sanchez@uta.edu.ec"
            >
              cp.sanchez@uta.edu.ec
            </a>
          </p>
        </div>
      </div>

      <section id="Oferta">
        <div className="flex flex-col justify-center items-center p-5">
          <img
            src="https://posgrado.uta.edu.ec/v4.0/images/OfertaAcademicaPosgrado2023_1/bannerOfertaAcademicaPosgrado2023.png"
            alt="Baner"
            className="h-full w-full object-cover"
          />
          <div className="text-box">
            <p>
              La Universidad Técnica de Ambato cuenta actualmente con 90
              programas de posgrado aprobados por el Consejo de Educación
              Superior CES de acuerdo al siguiente detalle:
            </p>
          </div>
          <div>
            <table className="min-w-full text-left text-sm font-light">
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4">
                  <span>TIPOS DE PROGRAMAS</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span>NÚMERO DE PROGRAMAS</span>
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4">
                  <span>Maestrías Académicas</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span>83</span>
                </td>
                {/* Agregué style={{ textAlign: 'center' }} para centrar el número */}
              </tr>
              {/* ... Otros elementos de la tabla */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 ">
                  <span>Maestrías en Investigación</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span>1</span>
                </td>
                {/* Agregué style={{ textAlign: 'center' }} para centrar el número */}
              </tr>
              {/* ... Otros elementos de la tabla */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4">
                  <span>Especialidades Médicas</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span>1</span>
                </td>
                {/* Agregué style={{ textAlign: 'center' }} para centrar el número */}
              </tr>
              {/* ... Otros elementos de la tabla */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 ">
                  <span>Especialidades en Enfermería</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span>3</span>
                </td>
                {/* Agregué style={{ textAlign: 'center' }} para centrar el número */}
              </tr>
              {/* ... Otros elementos de la tabla */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4">
                  <span>Especialidades Académicas</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span>3</span>
                </td>
                {/* Agregué style={{ textAlign: 'center' }} para centrar el número */}
              </tr>
              {/* ... Otros elementos de la tabla */}
            </table>
          </div>
          <div className="flex lg:flex-row flex-col gap-5">
            <img
              src="https://posgrado.uta.edu.ec/v4.0/images/OfertaAcademicaPosgrado2023_1/alimentosposgrado.png"
              alt="Imagen 1"
              className="lg:w-1/3"
            />
            <img
              src="https://posgrado.uta.edu.ec/v4.0/images/OfertaAcademicaPosgrado2023_1/agropecuariaposgrado.png"
              alt="Imagen 2"
              className="lg:w-1/3"
            />
            <img
              src="https://posgrado.uta.edu.ec/v4.0/images/OfertaAcademicaPosgrado2023_1/sistemasposgrados.png"
              alt="Imagen 3"
              className="lg:w-1/3"
            />
          </div>
        </div>
      </section>

      <section id="Programas" className="p-5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl font-bold mb-3">Programas en Inscripción</h1>
        </div>
        <div className="flex flex-col max-w-5xl ">
          <p>
            El Proceso de Inscripción de todo postulante a un Programa de
            Posgrado en la UTA es el siguiente
          </p>
          <br />
          <b>INSCRIPCIÓN</b>
          <br />
          <p>
            Los Programas de Posgrados de la Universidad Técnica de Ambato
            realiza el proceso de inscripción para poder seleccionar los mejores
            profesionales para poder ingresar nuestros programas de maestrías
            y/o especialidades que ofrece.
          </p>
          <br />
          <p>
            La apertura de una nueva cohorte de un programa de posgrado está
            sujeta a la inscripción de un número mínimo de estudiantes
            matriculados y que, caso contrario, se realizará un proceso de
            reembolso por los valores pagados.
          </p>
          <br />

          <p>La etapa de inscripción consta de los siguientes pasos:</p>
          <br />
          <p>1.1. Registro de información</p>
          <br />
          <p>1.2. Carga de archivos de documentos de respaldo</p>
          <br />
          <p>
            La información deberá ser registrada a través en el siguiente link
            de: {" "}
            <a className="text-japanese-maple-950 dark:text-blue-400 hover:underline" href="https://postulacionestudiantes.uta.edu.ec/postulations/index">
              INSCRIPCIÓN
            </a>
          </p>
          <br />
          <p>
            Al finalizar el proceso se deberá descargar el formulario de
            inscripción y enviarlo al correo electrónico que se menciona en la
            información del programa al que se inscribe.
          </p>
          <br />
          <p> NOTAS IMPORTANTES:</p>
          <br />
          <p>
            Es responsabilidad del postulante contar con la documentación
            solicitada para su proceso de inscripción y asegurarse de cumplir
            con todos los requerimientos señalados.
          </p>
          <br />
          <p>
            El postulante debe revisar los requerimientos específicos de cada
            programa (titulación previa, experiencia laboral, entre otros). Si
            hubiese inquietudes respecto a los requerimientos específicos debe
            contactar a la Dirección del Programa de Posgrado de su interés
            antes de seguir con el proceso.
          </p>
          <br />
          <p>
            Toda la información sobre los requerimientos y datos de contacto
            está disponible en el siguiente link dentro de la sección de cada
            programa o especialización.
          </p>
          <br />
        </div>
      </section>

      <section id="Sistemas">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl font-bold mb-3">Sistemas Posgrados</h1>
        </div>
        <div className="flex flex-col items-center mt-10">
          <NavLink
            to="https://si.uta.edu.ec/posgrado/LoginInscription/indexTeach.php"
            className="text-white bg-japanese-maple-700 dark:text-white dark:bg-japanese-maple-900 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            DOCENTES
          </NavLink>
        </div>
        <div className="flex flex-col items-center mt-10">
          <NavLink
            to="https://si.uta.edu.ec/posgrado/LoginInscription/indexStudent.php"
            className="text-white bg-japanese-maple-700 dark:text-white dark:bg-japanese-maple-900 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            ESTUDIANTES
          </NavLink>
        </div>
        <div className="flex flex-col items-center mt-10">
          <NavLink
            to="https://servicios.uta.edu.ec/sgposgradoest/Inicio/Login"
            className="text-white bg-japanese-maple-700 dark:text-white dark:bg-japanese-maple-900 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            SEGUIMIENTO GRADUADOS
          </NavLink>
        </div>
      </section>

      <section id="Aranceles">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl font-bold mb-3">Aranceles Universitarios</h1>
          <iframe
            src="https://posgrado.uta.edu.ec/v4.0/images/ARANCELES/ARANCELES_UTA_2023.pdf"
            className="w-full md:w-3/4 "
            width="600"
            height="700"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
