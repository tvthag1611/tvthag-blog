import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import type { Settings } from "@tryghost/content-api";

function Header({ setting }: { setting: Settings }) {
  return (
    <header className="h-[85px] bg-white px-2 sm:px-4 py-2.5 border-b border-gray-200 dark:bg-gray-900 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
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
        <div className="flex md:order-2">
          <ul className="flex flex-wrap p-4 text-base space-x-8">
            {setting.navigation !== undefined
              ? setting?.navigation.map((item) => (
                  <li
                    key={item.label}
                    className="block py-2 pl-3 pr-4 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))
              : " "}
          </ul>
        </div>
        <SocialIcons setting={setting} />
      </div>
    </header>
  );
}
export default Header;
