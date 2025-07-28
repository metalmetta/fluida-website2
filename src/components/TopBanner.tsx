import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <a 
        href="https://snake.getfluida.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-2 px-4 text-center font-medium hover:bg-primary/90 transition-colors duration-200"
      >
        🐍 Play Pay-Snake - The slowest payment game ever!
      </a>
    </div>
  );
};

export default TopBanner;