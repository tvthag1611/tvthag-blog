import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { getDateFormat } from "../_utils/date";

const CardPostHozi = ({ post }: { post: PostOrPage }) => {
  return (
    <Link href={`/read/${post.slug}`}>
      <div className="flex border border-gray-200 gap-6 shadow">
        <div className="px-14 py-10">
          <h4 className="text-3xl font-bold">{post.title}</h4>
          <p className="my-7 line-clamp-3">{post.excerpt}</p>
          <div className="flex justify-between items-center text-sm gap-2 text-gray-500">
            <p>{getDateFormat(post.published_at)}</p>
            <p>{post.reading_time} phút đọc</p>
          </div>
        </div>
        <div>
          <Image
            src={post.feature_image || ""}
            alt={post.title || ""}
            fill
            className="!relative !h-full !w-auto !object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default CardPostHozi;
