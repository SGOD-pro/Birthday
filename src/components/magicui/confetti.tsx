import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ConfettiFireworks() {
	const handleClick = () => {
		const duration = 5.2 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 1000, zIndex: 0 };

		const randomInRange = (min: number, max: number) =>
			Math.random() * (max - min) + min;

		const interval = window.setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 80 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);
	};
	useEffect(() => {
		const time = setTimeout(() => {
			handleClick();
		}, 0);
		return () => {
			clearTimeout(time);
		};
	}, []);

	return <div className="relative"></div>;
}
