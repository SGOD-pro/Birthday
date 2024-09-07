"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, Variants } from "framer-motion";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
const LayoutGridDemo = lazy(() => import("./Section"));
const AudioPlayerWithMute = lazy(() => import("./AudioPlayerWithMute"));

const sectionVariants: Variants = {
	initial: {
		opacity: 1,
		y: 0,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: "-100dvh",
		transition: { duration: 1, ease: "easeInOut" },
	},
};

const fadeInVariants: Variants = {
	initial: {
		opacity: 0,
		y: 50, // Slide up effect
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, ease: "easeInOut" },
	},
	exit: {
		opacity: 0,
		y: 50,
		transition: { duration: 1, ease: "easeInOut" },
	},
};

const buttonVariants: Variants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, ease: "easeInOut", delay: 3.5 },
	},
};

export default function Third() {
	const [isAnimating, setIsAnimating] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const handleButtonClick = () => {
		setIsAnimating(true);
	};

	useEffect(() => {
		if (!showButton) {
			const timer = setTimeout(() => {
				setShowButton(true);
			}, 2000); // 2 seconds delay for the button

			return () => clearTimeout(timer);
		}
	}, [showButton]);

	return (
		<div className="relative h-[100dvh] overflow-hidden">
			<div className="z-[5000]">
				<AudioPlayerWithMute />
			</div>
			{/* First Section */}
			<motion.section
				variants={sectionVariants}
				initial="initial"
				animate={isAnimating ? "exit" : "animate"}
				className="sm:w-1/2 m-auto h-full flex flex-col justify-center absolute top-0 left-0 right-0 z-30"
			>
				<WordPullUp
					className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
					words="Click on the image to reveal the secrets |and | Click outside of the image to close the image."
				/>
				<motion.div
					variants={buttonVariants}
					initial="initial"
					animate="animate"
					className="text-center mt-6 relative z-40"
				>
					<Button className="m-auto" onClick={handleButtonClick}>
						Okay
					</Button>
				</motion.div>
			</motion.section>

			{/* Second Section */}
			<motion.div
				variants={fadeInVariants}
				initial="initial"
				animate={isAnimating ? "animate" : "initial"}
				exit="exit"
				className="w-full h-full absolute top-0 left-0 right-0 z-0 overflow-auto"
			>
				<Suspense fallback={<div>Loading...</div>}>
					<LayoutGridDemo />
				</Suspense>
			</motion.div>
		</div>
	);
}
