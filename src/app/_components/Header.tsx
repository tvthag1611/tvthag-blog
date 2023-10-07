import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import type { Settings } from "@tryghost/content-api";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./header.css";

function Header({ setting }: { setting: Settings }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleFixedHeader = () => {
    setShowMenu(false);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixedHeader);
  }, []);

  return (
    <>
      {isFixed && (
        <div
          className={`min-h-[85px] bg-white px-4 py-2.5 border-b border-gray-200 dark:bg-[#121212] w-full`}
        ></div>
      )}
      <header
        className={`${
          isFixed ? "fixed" : "relative"
        } min-h-[85px] flex items-center bg-white px-4 py-2.5 border-b border-gray-200 dark:bg-[#121212] w-full top-0 left-0 z-10`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-xl font-bold dark:text-white"
            >
              {setting.logo !== null ? (
                <Image
                  alt={`${setting.title}`}
                  width={200}
                  height={100}
                  src={`${setting.logo}`}
                  className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                />
              ) : (
                setting.title
              )}
            </Link>
            <div className="hidden md:flex md:order-2">
              <ul className="flex flex-wrap p-4 text-base space-x-8">
                {setting.navigation !== undefined
                  ? setting?.navigation.map((item) => (
                      <li
                        key={item.label}
                        className="block uppercase py-2 pl-3 pr-4 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        <Link href={item.url}>{item.label}</Link>
                      </li>
                    ))
                  : " "}
              </ul>
            </div>
            <div className="flex items-center justify-end md:order-2">
              <SocialIcons setting={setting} />
              <div
                id="hamburger"
                className={`md:hidden ${showMenu ? "close" : ""}`}
                onClick={() => setShowMenu((old) => !old)}
              >
                <span className={`dark:!bg-white`}></span>
                <span className={`dark:!bg-white`}></span>
                <span className={`dark:!bg-white`}></span>
              </div>
            </div>
          </div>
          <div
            className={`${
              showMenu ? "show-header-mb" : "hidden-header-mb"
            } overflow-hidden md:hidden`}
          >
            <ul className="flex flex-col items-start first-letter:text-base">
              {setting.navigation !== undefined
                ? setting?.navigation.map((item) => (
                    <li
                      key={item.label}
                      className="block uppercase py-2 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      <Link href={item.url}>{item.label}</Link>
                    </li>
                  ))
                : " "}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
