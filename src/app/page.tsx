import { getNavigation } from "./_services/ghost-client";
import FeaturedPost from "./_components/FeaturedPost";
import GetMedia from "./_components/GetMedia";
import NewMedia from "./_components/NewMedia";
import GetFeaturedPost from "./_components/GetFeaturedPost";
import Image from "next/image";
import { Settings } from "@tryghost/content-api";

export async function generateMetadata() {
  const Metadata = await getNavigation();

  if (Metadata) {
    return {
      title: Metadata.meta_title,
      description: Metadata.meta_description,
      keywords: ["Blog", "Photos", "Tran Van Thang", "tvthag"],
    };
  }
}

export default async function Home() {
  const settings = (await getNavigation()) as Settings;

  return (
    <main className="min-h-[calc(100vh-165px)]">
      <div className="relative h-[467px]">
        <Image
          src={settings?.cover_image || ""}
          alt={settings?.meta_title || ""}
          fill
          className="w-full h-full object-cover absolute"
        />
        <div className="relative container flex flex-col justify-center h-full mx-auto">
          <h1 className="text-6xl font-bold">{settings?.meta_title}</h1>
          <p className="text-3xl text-gray-700">{settings?.meta_description}</p>
        </div>
      </div>
      <div className="container mx-auto">
        <FeaturedPost>
          {/* @ts-expect-error */}
          <GetFeaturedPost />
        </FeaturedPost>
        <NewMedia>
          {/* @ts-expect-error */}
          <GetMedia />
        </NewMedia>
      </div>
    </main>
  );
}
