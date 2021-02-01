import React from 'react';
import NavigationLink from './NavigationLink';
import DarkModeSwitcher from './DarkModeSwitcher';

function Navigation() {
   return (
      <div className="flex justify-between items-center">
         <div className="flex">
            <NavigationLink className="mr-2.5" exact to="/">
               Top
            </NavigationLink>
            <NavigationLink className="ml-2.5" to="/new">
               New
            </NavigationLink>
         </div>
         <DarkModeSwitcher />
      </div>
   );
}

export default Navigation;
