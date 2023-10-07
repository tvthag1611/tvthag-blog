import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { PostOrPage } from "@tryghost/content-api";
import { format } from "date-fns";
import { getPosts, getSinglePost } from "@/app/_services/ghost-client";
import ScrollToTop from "@/app/_components/ScrollToTop";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metaData = (await getSinglePost(params.slug)) as PostOrPage;

  let tags = metaData?.tags?.map((item) => item.name);

  if (metaData) {
    return {
      title: metaData.title,
      description: metaData.og_description,
      keywords: tags,
      openGraph: {
        title: metaData.title,
        description: metaData.excerpt,
        url: metaData.url,
        keywords: tags,
        images: [
          {
            url: metaData.feature_image,
          },
        ],
        locale: "vi",
        type: "website",
      },
    };
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Read({ params }: { params: { slug: string } }) {
  const getPost = await getSinglePost(params.slug);

  if (!getPost) {
    notFound();
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-3xl prose prose-xl prose-p:text-gray-800  dark:prose-p:text-gray-100 sm:prose-base prose-a:no-underline prose-blue dark:prose-invert">
          <figure className="mb-10">
            <Image
              className="!relative !w-full !h-auto"
              src={getPost.feature_image || ""}
              alt={getPost.feature_image_alt || ""}
              fill
            />
          </figure>

          <h1 className="!mb-0 text-3xl font-bold lg:text-5xl dark:text-white">
            {getPost.title}
          </h1>

          <div className="flex items-center text-sm dark:text-white">
            {getPost.published_at ? (
              <time
                className="text-base font-light text-gray-800 dark:text-white mx-1"
                dateTime={getPost?.published_at}
                title={format(new Date(getPost?.published_at), "dd/MM/yyyy")}
              >
                {format(new Date(getPost?.published_at), "dd MMMM, yyyy")}
              </time>
            ) : (
              ""
            )}

            <div className="text-base w-1 h-1 rounded-full bg-black dark:bg-white mx-1"></div>

            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              {" "}
              {getPost.reading_time} phút đọc
            </p>
          </div>
          <div>
            {getPost.primary_tag ? (
              <Link href={`/tags/${getPost?.primary_tag.slug}`}>
                #{getPost?.primary_tag?.name}
              </Link>
            ) : (
              ""
            )}
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div dangerouslySetInnerHTML={{ __html: getPost?.html || "" }}></div>
          <ScrollToTop />
        </article>
      </div>
    </main>
  );
}
