import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CareersSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    let starsArray = [];
    const numberOfStars = 100;

    class Star {
      constructor(x, y, length) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.baseY = y;
        this.speed = Math.random() * 0.3 + 0.1;
      }

      update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          this.y -= this.speed * 10;
        } else {
          this.y += (this.baseY - this.y) * 0.02;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "white";
        ctx.stroke();

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "gold";
        ctx.lineWidth = 2;
        ctx.shadowColor = "gold";
        ctx.shadowBlur = 10;
        for (let i = 0; i < 5; i++) {
          let angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          let x = this.x + Math.cos(angle) * 6;
          let y = this.y + Math.sin(angle) * 6;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }

    function initStars() {
      starsArray = [];
      for (let i = 0; i < numberOfStars; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height * 0.8 + 100;
        let length = Math.random() * 200 + 50;
        starsArray.push(new Star(x, y, length));
      }
    }

    function animate(mouseX, mouseY) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsArray.forEach((star) => {
        star.update(mouseX, mouseY);
        star.draw();
      });
      requestAnimationFrame(() => animate(mouseX, mouseY));
    }

    initStars();
    animate(-100, -100);

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", (e) => animate(e.clientX, e.clientY));

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", (e) => animate(e.clientX, e.clientY));
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <motion.div 
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl font-extrabold tracking-wide"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          CAREERS WITH INTELISYNC
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We ideate, design, and deliver seamless experiences by bridging the gap between your idea and the product.
        </motion.p>
        <motion.button 
          className="mt-6 px-6 py-3 text-lg font-semibold rounded-full border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Connect with Our Experts
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CareersSection;

