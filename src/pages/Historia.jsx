import { useEffect } from "react";

export const Historia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <img
          src="https://uta.edu.ec/v4.0/images/filosofia/historia10fondo2.webp"
          alt="Historia"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="flex gap-x-2">
            <div className="w-2  bg-japanese-maple-600"></div>
            <span className="lg:text-7xl text-5xl font-bold text-white">
              Historia de la UTA
            </span>
          </div>
        </div>
      </div>

        <div className="mx-auto px-4 lg:px-20">
        <div className="max-w-5xl mx-auto mt-14 p-6 bg-slate-100 dark:bg-neutral-700 rounded-md shadow-md">
        <p className="text-lg">
          Tomado del libro "Creación de la Universidad Técnica de Ambato" (Dr.
          Pedro Reino).
        </p>
        <p className="mt-4">
          La Universidad Técnica de Ambato fue creada el 18 de abril de 1969
          según aprobación del Congreso Nacional. Nació con el lema "Educarse es
          aprender a ser libres" bajo el pensamiento y la égida del Doctor
          Carlos Toro Navas quien presidió la conformación del Primer Consejo
          Universitario, luego de realizada la primera Asamblea Universitaria un
          10 de mayo de 1969. Vicerrector fue designado el economista Víctor
          Cabrera Guzmán.
        </p>
        <p className="mt-4">
          La Universidad Técnica de Ambato tiene su antecedente académico en un
          Instituto Superior fundado por profesionales en la rama de
          Contabilidad que se creó un 13 de septiembre de 1959 (Periódico
          Énfasis, UTA, Noviembre de 1985, p3). Dicho Instituto se oficializó un
          5 de julio de 1963 con sus escuelas de Contabilidad, Gerencia y
          Técnica Industrial.
        </p>
        <p className="mt-4">
          Entre las razones de motivación cultural para la creación de una
          universidad en Ambato, no se debe dejar de descartar la alusión a ser
          la tierra de aquellos personajes linajudos del siglo XIX que se
          destacaron en la literatura y en la política ecuatoriana como Juan
          Montalvo, Juan León Mera, Pedro Fermín Cevallos, Juan Benigno Vela,
          Luis Alfredo Martínez, José María Urbina, Celiano Monge y otros
          ligados a estos mismos apellidos por pertenecer a colaterales
          familiares destacados y prominentes.
        </p>
        <p className=" mt-4">
          Visto de otro ángulo, la necesidad de un pueblo pujante, de proyectar
          a sus hijos hacia la formación intelectual al margen de apellidos y de
          economías solventes, debe ser obtenida como razón para el surgimiento
          de un espacio educativo de alto nivel. Por idiosincrasia hay que
          anotar que las universidades de provincia no surgieron de la ideología
          de las clases de poder económico. Sus hijos generalmente siempre van a
          universidades privadas y del exterior. Ha sido la clase media la que
          ha luchado por hacer que sus hijos no se queden sin la formación con
          que veían de lejos a los hijos de los más acomodados de la sociedad.
          Este es el caso de la Técnica de Ambato, que aún en la actualidad, no
          retiene alumnos de la clase alta lugareña.
        </p>
      </div>
      </div>
    </div>
  );
};
