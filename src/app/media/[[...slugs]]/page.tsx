import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  getAllImages,
  getAllTags,
  IImage,
} from "../../_services/cloudinary.service";
import "./media.css";

export async function generateMetadata({
  params,
}: {
  params: { slugs: string[] };
}) {
  return {
    title: `Media${params?.slugs?.[0] ? ` - ${params?.slugs?.[0]}` : ""}`,
    description: "tvthag's media",
    keywords: ["photos", "media", "tvthag"],
  };
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags?.tags?.map((tag: string) => ({
    slugs: [tag],
  }));
}

export default async function MediaPage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const images = await getAllImages(params?.slugs?.[0], {
    max_results: 100,
  });
  const imageLength = images?.resources?.length || 0;
  const resources: IImage[][] = [[], [], [], []];
  images?.resources?.forEach((image: IImage, index: number) => {
    if (index < imageLength / 4) {
      resources[0]?.push(image);
    }
    if (index >= imageLength / 4 && index < (imageLength * 2) / 4) {
      resources[1]?.push(image);
    }
    if (index >= (imageLength * 2) / 4 && index < (imageLength * 3) / 4) {
      resources[2]?.push(image);
    }
    if (index >= (imageLength * 3) / 4) {
      resources[3]?.push(image);
    }
  });

  const tags = await getAllTags();

  return (
    <main className="min-h-[calc(100vh-165px)] p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-20">
          HELLO! WELCOME TO SUNZINE PHOTO GALLERY WITH CREATIVE & UNIQUE STYLE
        </h1>
        <ul className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <li
            className={`${
              params?.slugs?.[0] ? "" : "active"
            } text-gray-400 text-base font-medium text-center mx-3 menu-item`}
          >
            <Link href={`/media`}>All categories</Link>
          </li>
          {tags?.tags?.map((tag: string, index: number) => {
            return (
              <React.Fragment key={index}>
                <span>•</span>
                <li
                  className={`${
                    params?.slugs?.[0] === tag ? "active" : ""
                  } text-gray-400 text-base font-medium text-center mx-3 menu-item`}
                >
                  <Link href={`/media/${tag}`}>{tag}</Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
        {resources?.map((resource, index) => {
          return (
            <div className="grid gap-4" key={index}>
              {resource?.map((item) => {
                return (
                  <div key={item.asset_id}>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={item.url}
                      alt={item.public_id || ""}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
