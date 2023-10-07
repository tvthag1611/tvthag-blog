import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import type { Settings } from "@tryghost/content-api";

function Footer({ setting }: { setting: Settings }) {
  return (
    <footer className="h-[80px] bg-white px-2 sm:px-4 py-2.5 border-t border-gray-200 dark:bg-gray-900 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="https://github.com/tvthag1611"
          className="flex items-center"
        >
          <span className="self-center text-base whitespace-nowrap dark:text-white">
            <strong>tvthag</strong> 2023 copyright all rights reserved
          </span>
        </Link>

        <div className="flex md:order-2">
          <ul className="flex p-4 flex-row md:space-x-8 md:mt-0 md:text-sm font-medium">
            {setting.twitter !== null ? (
              <li>
                <Link
                  target="_blank"
                  href={`https://twitter.com/${setting.twitter}`}
                  className="block py-2 pl-3 pr-4 text-xl rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <FaLinkedin />
                </Link>
              </li>
            ) : (
              " "
            )}

            {setting.facebook !== null ? (
              <li>
                <Link
                  target="_blank"
                  href={`https://www.facebook.com/${setting.facebook}`}
                  className="block py-2 pl-3 pr-4 text-xl rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                >
                  <FaFacebook />
                </Link>
              </li>
            ) : (
              " "
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
