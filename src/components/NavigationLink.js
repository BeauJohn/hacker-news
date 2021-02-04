import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationLink({ className, children, ...props }) {
   return (
      <NavLink
         className={`${className} dark:text-white text:black font-bold text-xl`}
         activeClassName="dark:text-red-500 text-red-500"
         {...props}
      >
         {children}
      </NavLink>
   );
}

export default NavigationLink;
