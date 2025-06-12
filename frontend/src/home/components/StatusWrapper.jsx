import React, { useEffect, useState } from 'react';
import Status from './Status'; // Adjust path as needed

const StatusWrapper = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 1500);
    };

    // Initial check
    checkScreenSize();

    // Optional: update on resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div>
      {isVisible && <Status />}
    </div>
  );
};

export default StatusWrapper;
