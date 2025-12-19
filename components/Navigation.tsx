'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    // ScrollTrigger to change nav color based on scroll progress
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: '+=3000',
      onUpdate: (self) => {
        const progress = self.progress;

        // Change to white when background starts turning gray (progress > 0.6)
        // Change back to black when scrolling back up
        if (progress > 0.6) {
          setTextColor('white');
        } else {
          setTextColor('black');
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="text-2xl font-display font-bold tracking-tighter transition-colors duration-500"
          style={{ color: textColor }}
        >
          KLATOO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-kees-gold transition-colors duration-500"
            style={{ color: textColor }}
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-kees-gold transition-colors duration-500"
            style={{ color: textColor }}
          >
            Features
          </Link>
          <Link
            href="#tokenomics"
            className="text-sm font-medium hover:text-kees-gold transition-colors duration-500"
            style={{ color: textColor }}
          >
            Kubic
          </Link>
          <button
            className="px-6 py-2 rounded-full text-sm font-medium hover:bg-kees-gold transition-all duration-500"
            style={{
              backgroundColor: textColor === 'white' ? 'white' : 'black',
              color: textColor === 'white' ? 'black' : 'white'
            }}
          >
            Join Beta
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors duration-500"
          style={{ color: textColor }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-kees-bg border-b border-gray-200 p-6 md:hidden flex flex-col space-y-4">
          <Link href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="#tokenomics" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Kubic</Link>
          <button className="bg-kees-dark text-white px-6 py-3 rounded-full text-lg font-medium w-full">
            Join Beta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;