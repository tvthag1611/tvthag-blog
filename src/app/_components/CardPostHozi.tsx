import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { getDateFormat } from "../_utils/date";

const CardPostHozi = ({ post }: { post: PostOrPage }) => {
  return (
    <Link href={`/read/${post.slug}`}>
      <div className="flex flex-col border border-gray-200 gap-2 md:flex-row md:gap-4 lg:gap-6 shadow dark:text-white">
        <div className="order-1 p-4 md:p-8 lg:p-12 md:w-1/2">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
            {post.title}
          </h4>
          <p className="my-2 md:my-4 lg:my-6 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap justify-between items-center text-sm gap-2 text-gray-500">
            <p>{getDateFormat(post.published_at)}</p>
            <p>{post.reading_time}m read time</p>
          </div>
        </div>
        <div className="md:order-1 md:w-1/2 h-[196px] md:h-[220px] lg:h-[272px]">
          <Image
            src={post.feature_image || ""}
            alt={post.title || ""}
            fill
            className="!relative !object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default CardPostHozi;
