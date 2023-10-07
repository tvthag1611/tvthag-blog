import CardPostVerti from "@/app/_components/CardPostVerti";
import Pagination from "@/app/_components/Pagination";
import { PostsOrPages, Tag, Tags } from "@tryghost/content-api";
import { notFound } from "next/navigation";
import {
  getAllTags,
  getSingleTag,
  getTagPosts,
} from "../../_services/ghost-client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metaData = (await getSingleTag(params?.slug)) as Tag;

  return {
    title: metaData?.name,
    description: metaData?.description,
  };
}

export async function generateStaticParams() {
  const allTags = (await getAllTags()) as Tags;

  let allTagsItem: { slug: string }[] = [];

  allTags?.map((item) => {
    allTagsItem.push({
      slug: item.slug,
    });
  });

  return allTagsItem;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let tagPosts = (await getTagPosts(params.slug)) as PostsOrPages;

  if (tagPosts.length === 0) {
    notFound();
  }
  return (
    <main className="min-h-[calc(100vh-165px)]">
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2">
          {tagPosts?.map((post, index) => {
            return <CardPostVerti post={post} key={index} />;
          })}
        </div>
        <Pagination item={tagPosts?.meta?.pagination} />
      </div>
    </main>
  );
}
