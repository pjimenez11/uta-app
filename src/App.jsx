import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./components/header/Header";
import { Footer } from "./components/Footer";
import { headerNavigation } from "./data/navigationUTA";

function App() {
  const path = window.location.pathname;
  const [isExternal, setIsExternal] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const updatedIsExternal = onCurrentPath(path);
    setIsExternal(updatedIsExternal);
    setInitialLoadComplete(true);
  }, [path]);

  const onCurrentPath = (path) => {
    let isExternal = false;
    headerNavigation.forEach((item) => {
      if (item.href === path) {
        isExternal = item.isExternal;
        return;
      }
      if (item.subNavigation.some((subItem) => subItem.href === path)) {
        item.subNavigation.forEach((subitem) => {
          if (subitem.href === path) {
            isExternal = subitem.isExternal;
            return;
          }
        });
      }
    });

    return isExternal;
  };

  if (!initialLoadComplete) {
    return null;
  }

  return (
    <>
      {!isExternal && <Header />}
      <main className={`"h-full z-0 ${!isExternal ? "pt-[96px]" : ""}`}>
        <AppRoutes />
      </main>
      {!isExternal && <Footer />}
      <button id="myCustomTrigger" className="z-50 fixed  top-0 right-1/2 text-white dark:bg-gray-500 bg-gray-800 p-2 rounded-b-lg" >Sugerencias</button>
    </>
  );
}

export default App;
