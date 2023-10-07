"use client";
import React from "react";

interface ICategoryProps {
  title: string;
  onSeeMore: () => void;
  children: React.ReactNode;
}

const Category: React.FC<ICategoryProps> = ({ title, onSeeMore, children }) => {
  return (
    <div className="my-12">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-3xl font-bold">{title}</h3>
        <a
          onClick={onSeeMore}
          className="text-xl font-bold cursor-pointer hover:underline"
        >
          See more
        </a>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Category;
