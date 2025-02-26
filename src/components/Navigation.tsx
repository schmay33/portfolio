import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Add header background when scrolled
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          NS
        </a>

        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className={styles.themeToggleWrapper}>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation; 