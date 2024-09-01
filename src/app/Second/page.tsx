"use client"
import React from "react";
// words="May your journey ahead be as amazing as you are!"
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { useRouter } from "next/navigation";

function Page() {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center h-[100dvh] px-4">
			<div className="max-w-[32rem] overflow-hidden pt-8">
				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<p className="text-5xl font-semibold leading-tight">
						May <span className="text-[#5046e6]">your</span>
					</p>
				</BoxReveal>
				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<p className="text-5xl font-semibold leading-tight">
						journey ahead be as
					</p>
				</BoxReveal>
				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<p className="text-5xl font-semibold leading-tight">amazing as</p>
				</BoxReveal>
				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<p className="text-5xl font-semibold leading-tight">
						<span className="text-[#5046e6]">you</span> are!
					</p>
				</BoxReveal>

				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<div className="mt-[1.5rem]">
						<p>
							Let&rsquo;s make this moment unforgettable with your<br/> cherished
							<span className="font-semibold text-[#5046e6]"> photos</span>,
							<br />
							sweet
							<span className="font-semibold text-[#5046e6]">
								{" "}
								wishes
							</span>, <br />
							and heartfelt
							<span className="font-semibold text-[#5046e6]"> shairys</span> —
							all filled with love for you.
						</p>
					</div>
				</BoxReveal>

				<div className="flex justify-end">
				<BoxReveal boxColor={"#5046e6"} duration={0.7}>
					<Button
						className="mt-[1.5rem] bg-transparent border-2 border-[#5046e6] hover:bg-[#3c33c0]  text-white text-lg"
						onClick={() => {
							router.push("/third");
						}}
					>
						🐼{" "}Next
					</Button>
				</BoxReveal>
				</div>
			</div>
		</div>
	);
}

export default Page;
