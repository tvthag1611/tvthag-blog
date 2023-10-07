import { Pagination } from "@tryghost/content-api";
import Link from "next/link";

const Pagination = ({ item }: { item?: Pagination }) => {
  if (!item) return null;
  const { page, pages, next, prev } = item;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <Link
          href={`/blog/${prev}`}
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
        >
          {prev && (
            <>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1665 4H12.8332"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1665 4L4.49984 7.33333"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1665 4.00002L4.49984 0.666687"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
            </>
          )}
        </Link>

        <div className="sm:flex hidden">
          {Array.from({ length: pages }, (v, i) => (
            <Link
              key={i}
              className={`text-sm font-medium leading-none cursor-pointer ${
                page === i + 1
                  ? "text-blue-700 border-blue-400"
                  : "text-gray-600"
              } hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2`}
              href={`/blog/${i + 1}`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
        <Link
          href={`/blog/${next}`}
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
        >
          {next && (
            <>
              <p className="text-sm font-medium leading-none mr-3">Next</p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1665 4H12.8332"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 7.33333L12.8333 4"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 0.666687L12.8333 4.00002"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
