"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import searchData from "../../../search.json";
import type { PostOrPage } from "@tryghost/content-api";
import { clsx } from "clsx";

let searchPost: PostOrPage[] = [];

function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchPost.length = 0;

    searchData.map((item) => {
      if (
        item?.title?.trim().toLowerCase().includes(query?.trim().toLowerCase())
      ) {
        searchPost.push(item as PostOrPage);
      }
    });
  }, [query]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer outline-none" aria-label="Search">
          <FaSearch />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content
          className={clsx(
            "fixed z-50",
            "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
            "top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4",
            "bg-white dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          <div className="pb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={(event) => setQuery(event?.target.value)}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Start searching here ..."
                required
              />
            </div>
          </div>

          <div className="max-h-96 overflow-auto">
            {searchPost.length > 0
              ? searchPost.map((item) => {
                  return (
                    <div key={item.uuid} className="my-3">
                      <div className="text-white my-2 py-2 bg-blue-400 dark:bg-gray-900 dark:hover:bg-blue-400 border-none rounded-md dark:text-white">
                        <Link
                          href={`read/${item.slug}`}
                          className="relative inline-flex items-center rounded-lg w-full px-4 py-2 text-sm font-medium"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  );
                })
              : " "}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Search;
