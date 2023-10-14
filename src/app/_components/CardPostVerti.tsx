import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { getDateFormat } from "../_utils/date";

const CardPostVerti = ({ post }: { post: PostOrPage }) => {
  return (
    <Link href={`/read/${post.slug}`}>
      <div className="flex flex-col border border-gray-200 shadow dark:text-white">
        <div className="h-[179px] md:h-[179px] lg:h-[179px]">
          <Image
            src={post.feature_image || ""}
            alt={post.title || ""}
            fill
            className="!relative !object-cover"
          />
        </div>
        <div className="p-4 md:p-6">
          <h4 className="font-bold text-xl">{post.title}</h4>
          <p className="my-2 md:my-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap justify-between items-center gap-2 text-sm text-gray-500">
            <p>{getDateFormat(post.published_at)}</p>
            <p>{post.reading_time}m read time</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPostVerti;
