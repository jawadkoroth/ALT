"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface InteractiveGlobeProps {
  size?: number;
}

// Dynamically import the Globe component with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-blue-50 rounded-full">
      <div className="text-blue-500 animate-pulse">Loading Globe...</div>
    </div>
  ),
});

const InteractiveGlobe = ({ size = 300 }: InteractiveGlobeProps) => {
  const globeRef = useRef<any>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && globeRef.current) {
      // Auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;

      // Set initial position
      globeRef.current.pointOfView({
        lat: 25.276987,
        lng: 55.296249,
        altitude: 2.5,
      }); // Dubai coordinates
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-blue-50 rounded-full">
        <div className="text-blue-500 animate-pulse">Loading Globe...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      <Globe
        ref={globeRef}
        width={size}
        height={size}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(58, 134, 255, 0)"
        atmosphereColor="#3a86ff"
        atmosphereAltitude={0.15}
        enablePointerInteraction={true}
      />
    </div>
  );
};

export default InteractiveGlobe;
