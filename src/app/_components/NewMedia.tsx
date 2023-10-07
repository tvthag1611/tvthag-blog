"use client";
import { useRouter } from "next/navigation";
import Category from "./Category";

const NewMedia = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Category
      title="📷 New Media"
      onSeeMore={() => {
        router.push("/media");
      }}
    >
      {children}
    </Category>
  );
};

export default NewMedia;
