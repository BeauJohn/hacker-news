import React from 'react';
import NavigationLink from './NavigationLink';
import DarkModeSwitcher from './DarkModeSwitcher';

function Navigation() {
   return (
      <div className="flex justify-between items-center">
         <nav className="flex my-4">
            <NavigationLink className="mr-1" exact to="/">
               Top
            </NavigationLink>
            <NavigationLink className="ml-1" to="/new">
               New
            </NavigationLink>
         </nav>
         <DarkModeSwitcher />
      </div>
   );
}

export default Navigation;
