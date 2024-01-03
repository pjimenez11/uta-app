import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { headerNavigation } from "../../data/navigationUTA";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import NavMobile from "./NavMobile";
import ToggleMode from "./ToggleMode";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState(headerNavigation);
  const path = window.location.pathname;
  const [scrollY, setScrollY] = useState(0);
  const onCurrentPath = (path) => {
    setNavigation((prevNavigation) => {
      return prevNavigation.map((item) => {
        const newItem = {
          ...item,
          current:
            item.href === path ||
            item.subNavigation.some((subItem) => subItem.href === path),
          subNavigation: item.subNavigation.map((subItem) => ({
            ...subItem,
            current: subItem.href === path,
          })),
        };
        return newItem;
      });
    });
  };

  useEffect(() => {
    onCurrentPath(path);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full dark:bg-japanese-maple-900 bg-gray-300 z-10">
      <div className={`flex flex-row dark:bg-red-950 bg-gray-500 h-7 `}>
        <div className=" flex gap-x-10 justify-center items-center text-white basis-1/2">
          <a
            href="https://www.instagram.com/utecnicaambato/"
            target="_blank"
            className="flex flex-row "
          >
            <AiOutlineInstagram className="text-xl" />
          </a>
          <a
            href="https://twitter.com/UTecnicaAmbato"
            target="_blank"
            className="flex flex-row"
          >
            <FaXTwitter className="text-xl" />
          </a>
        </div>

        <div className=" flex justify-center items-center  basis-1/2 text-white">
          <NavLink to="/contacto" className="text-white">
            Contacto
          </NavLink>
        </div>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink
            to="/inicio"
            className="-m-1.5 p-1.5 flex flex-row items-center gap-x-2 text-slate-900 dark:text-white"
            onClick={() => onCurrentPath("/inicio")}
          >
            <img
              className="h-8 w-auto"
              src="https://servicios.uta.edu.ec/evaluacionintegral/Images/banderin.png"
              alt=""
            />
            <div className="w-[1px] h-5 bg-slate-900 dark:bg-white " />
            <div className="flex flex-col">
              <span className="text-sm font-bold ">Universidad</span>
              <span className="text-xs font-bold">Técnica de Ambato</span>
            </div>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.subNavigation.length > 0 ? (
              <Menu
                key={item.name}
                as="div"
                className="relative inline-block text-left"
              >
                <Menu.Button
                  className={`inline-flex w-full justify-center rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${
                    item.current
                      ? "dark:text-white text-japanese-maple-800"
                      : "dark:text-slate-300 text-gray-800"
                  }`}
                >
                  {item.name}
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-[200px] origin-top-right  rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {item.subNavigation.map((subItem) => (
                      <div key={subItem.name} className="p-1">
                        <Menu.Item as={Fragment}>
                          {({ active }) => (
                            <NavLink
                              to={subItem.href}
                              className={`${
                                active
                                  ? "dark:bg-gray-500 dark:text-white bg-japanese-maple-800 text-white"
                                  : "dark:text-white text-gray-900 "
                              }
                              ${
                                subItem.current
                                  ? "dark:bg-gray-500 dark:text-white bg-japanese-maple-800  text-white"
                                  : ""
                              }
                              group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => onCurrentPath(subItem.href)}
                              target={subItem.isExternal ? "_blank" : ""}
                            >
                              {subItem.name}
                            </NavLink>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? "dark:text-white text-japanese-maple-800"
                    : "dark:text-slate-300 text-gray-800"
                } text-sm leading-6`}
                onClick={() => onCurrentPath(item.href)}
                target={item.isExternal ? "_blank" : ""}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end mx-2">
          <ToggleMode />
        </div>
      </nav>
      <NavMobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        onCurrentPath={onCurrentPath}
      />
    </header>
  );
}
