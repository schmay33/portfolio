import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkTheme();
    
    // Set up observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system with reduced particle count for better performance
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = isDarkMode ? '#4FC3F7' : '#1A237E';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Reduce particle count for better performance
    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.color = isDarkMode ? '#4FC3F7' : '#1A237E';
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <canvas
        ref={canvasRef}
        className={styles.hero__canvas}
      />
      
      <div className="container">
        <motion.div
          className={styles.hero__content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className={styles.hero__greeting}
            variants={itemVariants}
          >
            Hi there! 👋
          </motion.p>
          
          <motion.h1
            className={styles.hero__title}
            variants={itemVariants}
          >
            I'm Nathan Schmidt
          </motion.h1>
          
          <motion.h2
            className={styles.hero__subtitle}
            variants={itemVariants}
          >
            Fullstack Developer
          </motion.h2>
          
          <motion.p
            className={styles.hero__location}
            variants={itemVariants}
          >
            Based in Kansas City, KS USA
          </motion.p>
          
          <motion.p
            className={styles.hero__description}
            variants={itemVariants}
          >
            Let's build something great together!
          </motion.p>
          
          <motion.div
            className={styles.hero__buttons}
            variants={itemVariants}
          >
            <a
              href="https://github.com/schmay33"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-w-schmidt/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        className={styles['hero__scroll-indicator']}
        onClick={handleScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className={styles['hero__scroll-indicator-text']}>View Projects</span>
        <span className={styles['hero__scroll-indicator-arrow']}>↓</span>
      </motion.a>
    </section>
  );
};

export default Hero; 