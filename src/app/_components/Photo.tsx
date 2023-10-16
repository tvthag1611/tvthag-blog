"use client";

import Image from "rc-image";
import { IImage } from "../_services/cloudinary.service";
import {
  AiOutlineRotateLeft,
  AiOutlineRotateRight,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSwap,
} from "react-icons/ai";

const Photo = ({ resources }: { resources: IImage[][] }) => {
  return (
    <Image.PreviewGroup
      icons={{
        rotateLeft: <AiOutlineRotateLeft />,
        rotateRight: <AiOutlineRotateRight />,
        zoomIn: <AiOutlineZoomIn />,
        zoomOut: <AiOutlineZoomOut />,
        close: <AiOutlineClose />,
        left: <AiOutlineLeft />,
        right: <AiOutlineRight />,
        flipX: <AiOutlineSwap />,
        flipY: <AiOutlineSwap className="rotate-90" />,
      }}
    >
      {resources?.map((resource, index) => {
        return (
          <div className="grid gap-4" key={index}>
            {resource?.map((item) => {
              return (
                <Image
                  src={item.url}
                  alt={item.public_id}
                  key={item.asset_id}
                />
              );
            })}
          </div>
        );
      })}
    </Image.PreviewGroup>
  );
};

export default Photo;
