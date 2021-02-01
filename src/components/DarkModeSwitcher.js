import React, { useState } from 'react';

function DarkModeSwitcher() {
   const [darkMode, setDarkMode] = useState(false);

   const handleClick = (e) => {
      document.documentElement.classList.toggle('dark');
      document.documentElement.classList.toggle('bg-black');
      setDarkMode((darkMode) => !darkMode);
   };

   return (
      <button className="text-3xl" onClick={handleClick}>
         {darkMode ? '💡' : '🔦'}
      </button>
   );
}

export default DarkModeSwitcher;
