import React, { useState, useEffect } from 'react';

function Loader() {
   const [dots, setDots] = useState('');

   useEffect(() => {
      const interval = setInterval(() => {
         setDots((dots) => (dots.length === 3 ? '' : dots + '.'));
      }, 500);
      return () => {
         clearInterval(interval);
      };
   }, []);

   return <div className="text-xl">Loading{dots}</div>;
}

export default Loader;
