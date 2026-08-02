"use client";

import { useEffect, useRef } from "react";

interface HalftoneImageProps {
  src: string;
  alt: string;
}

export default function HalftoneImage({ src, alt }: HalftoneImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.width;
    const H = canvas.height;

    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // --- Off-screen: draw image cover-top into canvas size ---
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const offCtx = off.getContext("2d")!;

      // object-cover + object-top scaling
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const sx = (W - sw) / 2;
      const sy = 0; // top-align

      // High contrast greyscale before reading pixels
      offCtx.filter = "grayscale(100%) contrast(1.6) brightness(1.05)";
      offCtx.drawImage(img, sx, sy, sw, sh);

      const { data } = offCtx.getImageData(0, 0, W, H);

      // Transparent background
      ctx.clearRect(0, 0, W, H);

      const gap = 3;           // very fine grid
      const maxR = 1.55;       // max dot radius (just under gap/2)

      for (let y = gap / 2; y < H; y += gap) {
        for (let x = gap / 2; x < W; x += gap) {
          const px = Math.min(Math.floor(x), W - 1);
          const py = Math.min(Math.floor(y), H - 1);
          const i = (py * W + px) * 4;

          const alpha = data[i + 3];
          if (alpha < 10) continue;

          // Luminance: 0 = black, 1 = white
          const lum = data[i] / 255; // already greyscale so R = lum

          // Skip near-white (background) areas
          if (lum > 0.84) continue;

          // Dot radius inversely proportional to luminance
          const radius = maxR * (1 - lum / 0.84);
          if (radius < 0.3) continue;

          // Color: dark→grey, mid-dark→orange, mid→grey, light→light grey
          let color: string;
          if (lum < 0.2) {
            color = "#444444";  // deep shadow — dark grey
          } else if (lum < 0.42) {
            color = "#ff5500";  // mid-shadow — orange accent
          } else if (lum < 0.62) {
            color = "#888888";  // mid-tone — grey
          } else {
            color = "#c8c8c8";  // highlight — light grey
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={600}
      aria-label={alt}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
