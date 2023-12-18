import React, { useEffect } from "react";
import ViewPdf from "./ViewPdf";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";

const Calendars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center flex-col px-7 w-full bg-[url('/images/background-red.jpg')] bg-no-repeat bg-cover pt-7">
      <div className="font-sans font-bold justify-center align-middle text-center space-y-5 ">
        <h2 className="font-sans text-3xl text-cyan-950">
          Calendarios Universidad Técnica de Ambato
        </h2>
      </div>
      <div className="flex flex-row justify-around align-middle space-x-8 w-full text-base font-medium text-gray-600 ">
        <aside className="flex flex-col rounded-xl shadow-md h-48 w-3/12 text-center space-y-5 bg-gradient-to-r bg-slate-200 py-5">
          <div className="">
            <NavLink
              className="font-sans hover:text-red-600 hover:underline"
              to="/calendars/pdf1"
            >
              Calendarios Cultura física
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-sans hover:text-red-600 hover:underline"
              to="/calendars/pdf2"
            >
              Calendarios Idiomas
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-sans hover:text-red-600 hover:underline"
              to="/calendars/pdf3"
            >
              Calendario Grado
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-sans hover:text-red-600 hover:underline"
              to="/calendars/pdf4"
            >
              Calendarios Nivelacion
            </NavLink>
          </div>
        </aside>
        <div className="w-full">
          <Routes>
            <Route
              path="/*"
              element={<Navigate to={"/calendars/pdf3"}></Navigate>}
            ></Route>
            <Route
              path="/pdf1"
              element={
                <ViewPdf
                  ruta="/pdfCalendars/Calendario_Cultura_Fisica.pdf"
                  nombre={"Cultura física"}
                ></ViewPdf>
              }
            ></Route>
            <Route
              path="/pdf2"
              element={
                <ViewPdf
                  ruta="/pdfCalendars/Calendario_Idiomas.pdf"
                  nombre={"Idiomas"}
                ></ViewPdf>
              }
            ></Route>
            <Route
              path="/pdf3"
              element={
                <ViewPdf
                  ruta="/pdfCalendars/Calendario_Semestre.pdf"
                  nombre={"Semestre"}
                ></ViewPdf>
              }
            ></Route>
            <Route
              path="/pdf4"
              element={
                <ViewPdf
                  ruta="/pdfCalendars/Calendario_Nivelacion.pdf"
                  nombre={" Nivelación"}
                ></ViewPdf>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Calendars;
