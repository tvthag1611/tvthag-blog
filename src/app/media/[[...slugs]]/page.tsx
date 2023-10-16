import Link from "next/link";
import React from "react";
import {
  getAllImages,
  getAllTags,
  IImage,
} from "../../_services/cloudinary.service";
import "./media.css";
import Photo from "@/app/_components/Photo";

export async function generateMetadata({
  params,
}: {
  params: { slugs: string[] };
}) {
  return {
    title: `Media ${
      params?.slugs?.[0] ? ` - ${decodeURI(params?.slugs?.[0])}` : ""
    }`,
    description: "tvthag's media",
    keywords: ["photos", "media", "tvthag", decodeURI(params?.slugs?.[0])],
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
    context: true,
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
      <div className="container mx-auto dark:text-white">
        <div className="my-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold uppercase mb-3">
            Photography
          </h1>
          <p>
            {`It's not professional photography, but out of 100, i'm sure to get 1 😁`}
          </p>
        </div>
        <ul className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <li
            className={`${
              params?.slugs?.[0] ? "" : "active dark:!text-white"
            } dark:hover:!text-white text-gray-400 text-base font-medium text-center mx-3 uppercase menu-item`}
          >
            <Link href={`/media`}>All categories</Link>
          </li>
          {tags?.tags?.map((tag: string, index: number) => {
            return (
              <React.Fragment key={index}>
                <span>•</span>
                <li
                  className={`${
                    decodeURI(params?.slugs?.[0]) === tag
                      ? "active dark:!text-white"
                      : ""
                  } dark:hover:!text-white text-gray-400 uppercase text-base font-medium text-center mx-3 menu-item`}
                >
                  <Link href={`/media/${tag}`}>{tag}</Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
        <Photo resources={resources} />
      </div>
    </main>
  );
}
