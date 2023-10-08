import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import type { Settings } from "@tryghost/content-api";

function Footer({ setting }: { setting: Settings }) {
  return (
    <footer className="min-h-[80px] flex items-center bg-white px-4 py-2.5 border-t border-gray-200 dark:bg-[#121212] w-full">
      <div className="container flex items-center justify-between mx-auto gap-2">
        <Link
          href="https://github.com/tvthag1611"
          className="flex items-center"
        >
          <span className="self-center text-base dark:text-white">
            <strong>tvthag</strong> 2023 copyright all rights reserved
          </span>
        </Link>

        <div className="flex md:order-2">
          <ul className="flex flex-row md:space-x-8 md:mt-0 md:text-sm font-medium">
            <li>
              <Link
                target="_blank"
                href={`https://www.youtube.com/c/TVTOfficial`}
                className="block py-2 pl-3 pr-4 text-xl rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={`https://www.linkedin.com/in/tvthag/`}
                className="block py-2 pl-3 pr-4 text-xl rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                <FaLinkedin />
              </Link>
            </li>

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
