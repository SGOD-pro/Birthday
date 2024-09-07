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
			<p className="font-bold md:text-4xl text-xl text-white">Wish</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Sending you all the love and good vibes on your birthday!
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Wish</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Hope your day is filled with love and happiness.
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Shyri</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Gulab jaisi ho, Gulab lagti ho, Gulab jaisi ho, Gulab lagti ho, halka sa
				v muskurado lajabab lagti hoo..e.
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Wish</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Another year older? Time to start lying about your age! 😉🎉
			</p>
		</div>
	);
};
const SkeletonFive = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Shyri</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Khase lau wo labz jo tujhe sunai de.. Duniya dekhe chand ko mujhe sirf
				tu dikhai dee...!
			</p>
		</div>
	);
};
const SkeletonSix = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Wish</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				May your birthday be as sweet as your smile!
			</p>
		</div>
	);
};
const Skeletonseven = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Shyri</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Mitti ki anokhi murat ho tum , zindigi ki ek zarurat ho tum, ful to
				khoobsurat hote he magar,ful to khoobsurat hote he magar, fulose v sada
				khoobsurat ho tum.
			</p>
		</div>
	);
};
const SkeletonEight = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Shyri</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
			Me din hu meri sam tum ho, me nind hu mara khwab tum ho, me lavz hu meri bat tum ho me tab hu. jab neri sath tum ho
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s1.jpeg?alt=media&token=4c1157ff-cf36-40f0-8253-63108805f27e",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s2.jpg?alt=media&token=a2a827d8-7938-49ab-bb03-5bd4e8ab3388",
	},
	{
		id: 3,
		content: <SkeletonFive />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s3.jpg?alt=media&token=d924e9a6-e36b-4be9-ab7c-0ccaa7c84ced",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s4.jpg?alt=media&token=1ffcefb2-6b88-4061-b090-83f9da56498c",
	},
	{
		id: 5,
		content: <SkeletonThree />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s5.jpg?alt=media&token=c656092d-c346-4fdf-a645-10f1fd4a1755",
	},
	{
		id: 6,
		content: <SkeletonSix />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s6.jpg?alt=media&token=69f425b9-c4f9-4302-8e09-e85a25b9d74d",
	},
	{
		id: 7,
		content: <SkeletonEight />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/s7.jpg?alt=media&token=d6609176-9dbd-458e-bf16-91b0e29cb8d6",
	},
	{
		id: 8,
		content: <Skeletonseven />,
		className: "size-full",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/birthday-65892.appspot.com/o/WhatsApp%20Image%202024-09-02%20at%2011.42.34_9cb69682.jpg?alt=media&token=aac2dc62-cfaa-4669-8e8a-de7083cdc18c",
	},
];
