import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 250;
    const colors = ["#ffffff", "#ffe9c4", "#d4fbff"];

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.05 + 0.02,
      });
    }

    const resize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      const scaleX = newWidth / canvasWidth;
      const scaleY = newHeight / canvasHeight;

      stars = stars.map((star) => ({
        ...star,
        x: star.x * scaleX,
        y: star.y * scaleY,
      }));

      canvasWidth = newWidth;
      canvasHeight = newHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0a0b1dff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default StarBackground;
