import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import User from './components/User';

function App() {
   return (
      <div className="md:container mx-auto my-12 px-12">
         <Router>
            <Navigation />
            <Switch>
               <Route
                  exact
                  path="/"
                  component={() => <Posts limiter={50} endpoint="topstories" />}
               />
               <Route
                  path="/new"
                  component={() => <Posts limiter={50} endpoint="newstories" />}
               />
               <Route path="/users/:userName" component={User} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
