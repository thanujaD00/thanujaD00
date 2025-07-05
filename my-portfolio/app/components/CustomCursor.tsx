'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };
    
    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2)';
      cursorDot.style.transform = 'scale(1.5)';
    };
    
    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursorDot.style.transform = 'scale(1)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-effect');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full pointer-events-none z-50" id="cursor"></div>
      <div className="fixed top-0 left-0 w-8 h-8 border border-orange-400 rounded-full pointer-events-none z-50" id="cursor-dot"></div>
    </>
  );
} 