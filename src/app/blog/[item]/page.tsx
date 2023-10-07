import CardPostVerti from "@/app/_components/CardPostVerti";
import Pagination from "@/app/_components/Pagination";
import { PostsOrPages } from "@tryghost/content-api";
import { notFound } from "next/navigation";
import {
  getNavigation,
  getPaginationPosts,
  getPosts,
} from "../../_services/ghost-client";

export async function generateMetadata() {
  const metaData = await getNavigation();

  if (metaData) {
    return {
      title: metaData.title,
      description: metaData.description,
      openGraph: {
        title: metaData.title,
        description: metaData?.description,
        url: metaData.url,
      },
    };
  }
}

export async function generateStaticParams() {
  const posts: PostsOrPages = await getPosts(9);

  let paginationItem: { item: string }[] = [];

  for (let index = 1; index <= posts?.meta.pagination.pages; index++) {
    paginationItem.push({
      item: index.toString(),
    });
  }

  return paginationItem;
}

export default async function Blog({ params }: { params: { item: string } }) {
  let getParams: number = Number.parseInt(params.item);

  const posts = await getPaginationPosts(1, getParams);

  if (posts?.length === 0) {
    notFound();
  }
  return (
    <main className="min-h-[calc(100vh-165px)]">
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2">
          {posts?.map((post, index) => {
            return <CardPostVerti post={post} key={index} />;
          })}
        </div>
        <Pagination item={posts?.meta?.pagination} />
      </div>
    </main>
  );
}
