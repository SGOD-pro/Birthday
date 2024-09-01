"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "min-h-96",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/aspirants-b1e24.appspot.com/o/upload%2Fgallery%2FIMG-Sun%20Aug%2018%202024%2009%3A39%3A28%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=9556cc7d-6bd5-4c7e-845d-01d4b57a8d2b",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "min-h-96",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "min-h-96",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/aspirants-b1e24.appspot.com/o/upload%2Fgallery%2FIMG-Sun%20Sep%2001%202024%2023%3A53%3A22%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=52632b22-ec25-42cf-b11e-d47af1ca4c21",
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/aspirants-b1e24.appspot.com/o/upload%2Fgallery%2FIMG-Tue%20Aug%2027%202024%2018%3A57%3A33%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=f59f16ad-0565-46cb-b26e-94cef1c52f1b",
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/aspirants-b1e24.appspot.com/o/upload%2Fgallery%2FIMG-Tue%20Aug%2027%202024%2018%3A57%3A33%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=f59f16ad-0565-46cb-b26e-94cef1c52f1b",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "min-h-96",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/aspirants-b1e24.appspot.com/o/upload%2Fgallery%2FIMG-Tue%20Aug%2027%202024%2018%3A57%3A33%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=f59f16ad-0565-46cb-b26e-94cef1c52f1b",
  },
];
