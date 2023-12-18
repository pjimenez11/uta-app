
import { TERipple } from 'tw-elements-react';
import { NavLink } from 'react-router-dom';

export  function CartFacultades( {item = []} ){
  return (
      <div
        className="w-[370px] h-[550px] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <TERipple>
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg w-full h-72 object-cover"
              src={item.imagen}
              alt="" />
           <NavLink to={item.href} target='_blank'>
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </NavLink>
          </div>
        </TERipple>
        <div className=" p-6  text-center justify-between flex flex-col items-center">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           <strong>{item.name}</strong> 
          </h5>
          <p className="text-justify mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {item.description}
          </p>
          <TERipple>
          <NavLink to={item.href}>
            <button
              type="button"
              className=" inline-block rounded bg-slate-500 dark:bg-japanese-maple-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-700 hover:dark:bg-japanese-maple-950 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Informacion
            </button>
            </NavLink>
          </TERipple>
        </div>
      </div>
  );
}