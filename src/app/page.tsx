import { getNavigation } from "./_services/ghost-client";
import FeaturedPost from "./_components/FeaturedPost";
import GetMedia from "./_components/GetMedia";
import NewMedia from "./_components/NewMedia";
import GetFeaturedPost from "./_components/GetFeaturedPost";
import Image from "next/image";
import { Settings } from "@tryghost/content-api";

export async function generateMetadata() {
  const metadata = await getNavigation();

  return {
    title: metadata?.meta_title || "tvthag",
    description:
      metadata?.meta_description || "Ghi lại những điều hay ho của cuộc sống",
    facebook: {
      images: { url: metadata?.og_image, alt: metadata?.og_title },
      title: metadata?.og_title,
      description: metadata?.og_description,
    },
    twitter: {
      images: { url: metadata?.twitter_image, alt: metadata?.twitter_title },
      title: metadata?.twitter_title,
      description: metadata?.twitter_description,
    },
    keywords: ["Blog", "Photos", "Tran Van Thang", "tvthag"],
  };
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
          className="w-full h-full object-cover absolute brightness-80"
        />
        <div className="relative container flex flex-col justify-end h-full mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Trần Văn Thắng
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-4">
            {settings?.description}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <FeaturedPost>
          <GetFeaturedPost />
        </FeaturedPost>
        <NewMedia>
          <GetMedia />
        </NewMedia>
      </div>
    </main>
  );
}
