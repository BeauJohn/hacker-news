import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import New from './components/New';
import User from './components/User';
import Home from './components/Home';

function App() {
   return (
      <div className="md:container mx-auto my-12 px-12">
         <Router>
            <Navigation />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/new" component={New} />
               <Route path="/users/:userName" component={User} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
