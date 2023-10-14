"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { IImage } from "../_services/cloudinary.service";
import { clsx } from "clsx";
import { AiOutlineClose } from "react-icons/ai";

const Photo = ({ item }: { item: IImage }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Image
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={item.url}
            alt={item.public_id || ""}
            width={item.width}
            height={item.height}
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 fixed inset-0 z-10" />
          <Dialog.Content
            className={clsx(
              "fixed z-50",
              "w-[95vw] rounded-lg h-auto max-h-[95vh]",
              "top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4",
              "focus:outline-none"
            )}
          >
            <Image
              className="rounded-lg object-contain"
              src={item.url}
              alt={item.public_id || ""}
              width={item.width}
              height={item.height}
            />
            <Dialog.Close asChild>
              <button
                className="absolute top-0 right-0 w-10 h-10 text-2xl text-white flex items-center justify-center focus:outline-none"
                aria-label="Close"
              >
                <AiOutlineClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Photo;
