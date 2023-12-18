import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";
import { headerNavigation } from "../data/navigationUTA";
import { servicesNavigation } from "../data/navigationUTA";
import { noticias } from "../data/noticias";
import { useEffect } from "react";

export const Home = () => {
  const navigation = headerNavigation.filter(
    (item) => item.name === "Programas de estudio"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formateDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.toLocaleString("default", { day: "numeric" });
    const year = dateObj.toLocaleString("default", { year: "numeric" });
    return `${day} de ${month} del ${year}`;
  };

  return (
    <div className="w-full h-full">
      <div className="flex md:flex-row flex-col my-auto mx-auto">
        <div className="md:w-4/6 w-full h-[615px] z-0">
          <Carousel />
        </div>
        <div className="md:w-2/6 w-full h-[615px] bg-japanese-maple-800 dark:bg-neutral-900">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col gap-y-16 justify-center items-center p-3 h-full">
              {navigation.map((item) =>
                item.subNavigation.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.href}
                    className="flex gap-x-2 items-center justify-start w-full text-white font-bold text-2xl hover:text-slate-300  "
                    target={subItem.isExternal ? "_blank" : ""}
                  >
                    <subItem.icon className="text-4xl" />
                    {subItem.name}
                  </NavLink>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center w-full py-10">
        {servicesNavigation.map((item) => (
          <div
            key={item.name}
            className="block w-60 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600 hover:dark:bg-neutral-700 hover:bg-slate-200"
          >
            <NavLink
              to={item.href}
              className="flex flex-col justify-center items-center"
              target={item.isExternal ? "_blank" : ""}
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat pt-4">
                <img
                  className="rounded-t-lg h-20
                "
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <div className="p-6 flex justify-center items-center ">
                {item.name}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 justify-start items-center w-full  p-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Noticias y eventos
        </h2>
        <hr className="w-28 border-[3px] border-japanese-maple-800 dark:border-slate-300" />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:px-20 sm:px-14 px-10">
          {noticias.map((item) => (
            <div
              key={item.id}
              className="mx-3 mt-6 flex w-72 sm:w-64 flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 "
            >
              <a className="bg-white rounded-t-lg">
                <img
                  className="rounded-t-lg w-full"
                  src={item.imagen}
                  alt="Skyscrapers"
                />
              </a>
              <div className="p-6 h-40 ">
                <p className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 truncate-lines-3">
                  {item.titulo}
                </p>
                <NavLink className="text-sm text-neutral-500 dark:text-neutral-400 hover:underline">
                  Leer mas
                </NavLink>
              </div>
              <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                <small>{formateDate(item.fecha)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-start items-center w-full p-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Redes y alianzas
        </h2>
        <hr className="w-28 border-[3px] border-japanese-maple-800 dark:border-slate-300" />
        <div className="flex flex-wrap gap-5 justify-center items-center w-full py-10">
          <img
            src="https://www.grupolarabida.org/wp-content/uploads/2020/10/GLR_Logo_V_600x700_Positivo.jpg"
            alt="grupolarabida"
            className="w-40 h-40"
          />
          <img
            src="https://www2.ucuenca.edu.ec/images/ucuenca/redes/UDUAL-01.png"
            alt="UDUAL"
            className="w-40 h-40"
          />
          <img
            src="https://www.ups.edu.ec/documents/20121/190281/012UPS%2B001.jpg/13f81b69-d1f0-1671-7b43-ea40e74af584?t=1627507889461"
            alt="REDU"
            className="w-40 h-40"
          />
          <img
            src="data:image/jpeg;base64,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YFKmdNjkqthABLg7V8SQDnOPnOkE09vQ9O2Mq2NiJtFjqrBOU3KGwxHkTmbgCROPZesWiZyuiIkLvOc/ZqdamrYfgz26R1r2uj1hq3xhvVZgSDx/2TOhxG2TE4RMZUWc/wBqNXrVQpotO1ljKR3m+tUrzxkBmBLezjE6HEYiJxOcItE2jEcmJ05XFSBwQ4rQMCckMAM8+fOZq+1XZxNbVsY7LEJKP47SfEEeanjPwm/AlcRFprOY6omsWjhnohTU9g+pK21aVsH6aWIFP/uZT/Cb/sr2CtSxb9UEHdkMlStuJYcqWI44ODjnkDmSXtjE1ncXmMMI2tInKE7+xXUyzEaUkF2I/K085JIP05IHo86VqNNp3r1Ffdu2oZwu5W9UogBypI8VP7p1mIxIvrWvXErae2rS3FEy4z0p/Uh9tX/eRCmCR8R98l70p/Uh9tX/AHkQ1fSH6y/fOrbej9ce67v46PtP2Wu077663s0zgMrqN2zP5rY8Pj5znUqdjhVZmP5qqST7sCfRVC5RR/pX7pcunQHIVQfaFAMyjdTEYmMtv+OJnMS4X0d9mLNOG1N6FLXXaqHG5EzkkjyJwOPdOk7RuQi5LLSbkFzIWDCvnzXkLu2AkeAJ983QWUK/xnPa82tmXVXTileGHCOSpvNDN+DtqdNucl2Hdd3g7XHrFN4AyDwM/mzc6JCNLcO9W1WFpQoSyou36AZslhu3HzxnHkJ0ISCvwibIjTw5O7R6hdOt+8tbXplVFqTZsUlO8bBLFn2g4x7OBnEo5Q96un1D16c0rutZ3ZEsLjCh2OQSNwbByMjwM67bLRXHEeG4+sVu2kdlatVfUoCLbNhYE7SrEjKsQSM+IwPDEt012H0+Xu/Cn1TLerFwv0LDtK/QCjau3HiBnnkzs9kwB0pO8FjPY5RmZFdiyIWBBKj24JHOcAkDGYiYR4cudpIXT0mwuTqLDvstssC17VfaCFIxwAoHAJweTybNBqNy0fhVli19zZhiz1hrEsKDcww24KOATzknk8ztNkbIynw+fVw/TSgrrTUvZXR3VpXLOmX71924jB3gFcA+08ezqegNYdPWbd3ebBu3jDn2Fh5MRgn3mZ5T+0uVcRM5WrXErsSsRKrkREBERAREQEREBERAShlYgcZ6Ta2bRgKrMe+r4VSx8+cCRNXobtw/JW/SXxrf2/CfRW2U2zbT1+CvDhzau347cWXlpz6q/qr90yJaBLpi6IIiISREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
            alt="aup"
            className="w-40 h-40"
          />
          <img
            src="https://www.gcub.org.br/wp-content/uploads/2020/08/Design-sem-nome-27-768x768.png"
            alt="GCUB"
            className="w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
};
