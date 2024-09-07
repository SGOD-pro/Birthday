// components/AudioPlayerWithMute.tsx
import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayerWithMute = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Toggle mute and handle audio playback
  const toggleMute = () => {
    console.log("first")
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(prev => !prev);
      if (!audioRef.current.paused && !isMuted) {
        audioRef.current.play();
      }
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio play error:", error);
      });
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src="/play.mp3" preload="auto" />
      <button
        onClick={toggleMute}
        className="rounded-full p-4 bg-slate-800/50 shadow-md shadow-black"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </div>
  );
};

export default AudioPlayerWithMute;
