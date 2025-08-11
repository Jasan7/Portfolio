import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let isMobile = window.innerWidth <= 768;
    let numStars = isMobile ? 120 : 250;
    const colors = ["#ffffff", "#ffe9c4", "#d4fbff"];
    let stars = [];
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight * 1.5;

    // Setup canvas
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Generate stars once
    const generateStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          radius: Math.random() * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.05 + 0.02,
        });
      }
    };
    generateStars();

    // Throttled resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        isMobile = window.innerWidth <= 768;
        numStars = isMobile ? 120 : 250;
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight * 1.5;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        generateStars(); // regenerate for new screen size
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    // Pause animation when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0a0b1dff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "150vh",
        backgroundColor: "#0a0b1d",
        zIndex: -1,
      }}
    />
  );
};

export default StarBackground;
