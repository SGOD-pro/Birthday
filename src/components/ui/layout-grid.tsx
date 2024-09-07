"use client";
import React, { useState } from "react";
import {  motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
type Card = {
	id: number;
	content: JSX.Element | React.ReactNode | string;
	className: string;
	thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
	const [selected, setSelected] = useState<Card | null>(null);
	const [lastSelected, setLastSelected] = useState<Card | null>(null);

	const handleClick = (card: Card) => {
		setLastSelected(selected);
		setSelected(card);
	};

	const handleOutsideClick = () => {
		setLastSelected(selected);
		setSelected(null);
	};

	return (
		<div className="p-5 sm:p-20 py-10 columns-1 sm:columns-2 gap-4 md:columns-3">
			{cards.map((card, i) => (
				<div key={i} className={card.className+" relative h-[404px] mb-5"}>
					<motion.div
						onClick={() => handleClick(card)}
						className={cn(
							card.className,
							"relative overflow-hidden size-full rounded-lg object-contain",
							selected?.id === card.id
								? "rounded-lg cursor-pointer fixed inset-0 h-[70dvh] w-fit md:w-fit m-auto z-50 flex justify-center items-center flex-wrap flex-col"
								: lastSelected?.id === card.id
								? "z-40 bg-white rounded-xl h-full w-full"
								: "bg-white rounded-xl h-full w-full"
						)}
						layoutId={`card-${card.id}`}
					>
						{selected?.id === card.id && <SelectedCard selected={selected} />}
						<ImageComponent card={card} />
					</motion.div>
				</div>
			))}
			<motion.div
				onClick={handleOutsideClick}
				className={cn(
					"fixed h-full w-full left-0 top-0 bg-black opacity-0 z-10",
					selected?.id ? "pointer-events-auto" : "pointer-events-none"
				)}
				animate={{ opacity: selected?.id ? 0.3 : 0 }}
			/>
		</div>
	);
};


const ImageComponent = ({ card }: { card: Card }) => {
	return (
		<motion.div
			layoutId={`image-${card.id}-image`}
			
			className={cn(
				"object-cover object-top absolute inset-0 size-full transition duration-200 mb-10"
			)}
		>
			<Image
			src={card.thumbnail}
			height="700"
			width="450"
			alt="thumbnail"
			className="w-full h-full  object-cover object-top"
			/>

			
		</motion.div>
	);
};
const SelectedCard = ({ selected }: { selected: Card | null }) => {
	return (
		<div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 0.6,
				}}
				className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
			/>
			<motion.div
				layoutId={`content-${selected?.id}`}
				initial={{
					opacity: 0,
					y: 100,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				exit={{
					opacity: 0,
					y: 100,
				}}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				className="relative px-8 pb-4 z-[70]"
			>
				{selected?.content}
			</motion.div>
		</div>
	);
};
