"use client";
import { useRouter } from "next/navigation";
import Category from "./Category";

const FeaturedPost = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Category
      title="🌟 Featured"
      onSeeMore={() => {
        router.push("/blog/1");
      }}
    >
      {children}
    </Category>
  );
};

export default FeaturedPost;
