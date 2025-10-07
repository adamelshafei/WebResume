/**
 * useIsMobile Hook - Responsive Screen Detection
 * ==============================================
 * Detects if the user is on a mobile device based on screen width.
 * 
 * BREAKPOINT: 768px (md breakpoint in Tailwind)
 * - Returns true if screen width < 768px (mobile/tablet)
 * - Returns false if screen width >= 768px (desktop)
 * 
 * USAGE:
 * const isMobile = useIsMobile();
 * return isMobile ? <MobileLayout /> : <DesktopLayout />;
 * 
 * NOTES:
 * - Updates on window resize
 * - Uses ResizeObserver for performance
 * - Cleans up listeners on unmount
 */

import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}
