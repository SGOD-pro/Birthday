"use client";
import { motion,useAnimation  } from "framer-motion";
import GradualSpacing from "@/components/magicui/gradual-spacing"; // Adjust the import path accordingly
// import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";
import React from "react";
import { useRouter } from "next/navigation";


export default function App() {
	const controls = useAnimation();
const router=useRouter();
	React.useEffect(() => {
		// Start the hiding animation after 6 seconds (6000ms)
		const timer = setTimeout(() => {
			controls.start({
				y: -100,
				opacity: 0,
				transition: { duration: 1 },
			});
		}, 6600);
		return () => clearTimeout(timer);
	}, [controls]);
	return (
		<motion.div
			className="flex flex-col items-center h-[100dvh] justify-center"
			initial="hidden"
			animate={controls}
      onAnimationComplete={()=>router.push("/Second")}
		>
			<motion.div initial="hidden" animate="visible">
				<GradualSpacing
					className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
					text="Happy 19th"
					duration={1.5}
				/>
				<GradualSpacing
					className="font-display mt-5 text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
					text="BirthDay to you ❤"
					duration={1.5}
				/>
			</motion.div>
			<Confetti />
		</motion.div>
	);
}
