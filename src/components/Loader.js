import React, { useState, useEffect } from 'react';

function Loader({ loadText = 'Loading' }) {
   const [dots, setDots] = useState('');

   useEffect(() => {
      const interval = setInterval(() => {
         setDots((dots) => (dots.length === 3 ? '' : dots + '.'));
      }, 350);
      return () => {
         clearInterval(interval);
      };
   }, []);

   return (
      <div className="text-4xl  items-center flex justify-center">
         {loadText}
         {dots}
      </div>
   );
}

export default Loader;
