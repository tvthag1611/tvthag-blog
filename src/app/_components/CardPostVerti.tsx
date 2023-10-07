import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { getDateFormat } from "../_utils/date";

const CardPostVerti = ({ post }: { post: PostOrPage }) => {
  return (
    <Link href={`/read/${post.slug}`}>
      <div className="flex flex-col border border-gray-200 shadow">
        <div>
          <Image
            src={post.feature_image || ""}
            alt={post.title || ""}
            fill
            className="!relative !w-full !h-auto !object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="font-bold text-xl">{post.title}</h4>
          <p className="my-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
            <p>{getDateFormat(post.published_at)}</p>
            <p>{post.reading_time} phút đọc</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPostVerti;
