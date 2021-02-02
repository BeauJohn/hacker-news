import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Posts from './components/Posts';

function App() {
   return (
      <div className="md:container mx-auto my-5 px-10">
         <Router>
            <Navigation />
            <Switch>
               <Route
                  exact
                  path="/"
                  component={() => (
                     <Posts limiter={200} endpoint="topstories" />
                  )}
               />
               <Route
                  path="/new"
                  component={() => (
                     <Posts limiter={200} endpoint="newstories" />
                  )}
               />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
