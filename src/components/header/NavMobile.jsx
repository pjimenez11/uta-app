import { Dialog, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavMobile = ({ mobileMenuOpen, setMobileMenuOpen, navigation }) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-japanese-maple-900 bg-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <NavLink to="/inicio" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://servicios.uta.edu.ec/evaluacionintegral/Images/banderin.png"
              alt=""
            />
          </NavLink>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 dark:text-white text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Cerrar menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) =>
                item.subNavigation.length > 0 ? (
                  <Disclosure key={item.name} as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 dark:text-slate-200 text-gray-900 hover:bg-gray-100 hover:dark:bg-japanese-maple-950">
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {item.subNavigation.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={NavLink}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 dark:text-slate-200 text-gray-900 hover:bg-gray-100 hover:dark:bg-japanese-maple-950"
                              onClick={() => setMobileMenuOpen(false)}
                              target={item.isExternal ? "_blank" : ""}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-slate-200 text-gray-900 hover:bg-gray-100 hover:dark:bg-japanese-maple-950"
                    onClick={() => setMobileMenuOpen(false)}
                    target={item.isExternal ? "_blank" : ""}
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavMobile;
