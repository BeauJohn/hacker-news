import React, { useEffect, useState, useRef } from 'react';
import { getUser } from '../api/Request';
import Loader from './Loader';
import Posts from './Posts';
import { getDate, getTime } from '../_utils';

function User({ match, limiter }) {
   const { userName } = match.params;
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);
   const isMounted = useRef(null);

   useEffect(() => {
      const controller = new AbortController();
      isMounted.current = true;
      getUser(userName, { signal: controller.signal }, limiter).then((user) => {
         if (isMounted.current) {
            setUser(user);
            setLoading(false);
         }
      });
      return () => {
         isMounted.current = false;
         controller.abort();
      };
   }, []);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <div>
               <div>
                  <h1>{userName}</h1>
                  <p>
                     {'Joined on '}
                     {getDate(user.created)}, {getTime(user.created)}
                     {' has '} {user.karma.toLocaleString()} karma
                  </p>
                  <div>{user.about}</div>
               </div>
               <Posts posts={user.submitted} />
            </div>
         )}
      </>
   );
}

export default User;
