import React, { useEffect, useState } from 'react';
import { getUser } from '../api/Request';
import Loader from './Loader';
import Posts from './Posts';
import { getDate, getTime } from '../_utils';

function User(props) {
   const { userName } = props.match.params;
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState({ karma: 0 });

   useEffect(() => {
      getUser(userName).then((user) => {
         setUser(user);
         console.log(user);
      });
   }, []);

   return (
      <>
         <div>
            <h1>{userName}</h1>
            <p>
               {'Joined on '}
               {getDate(user.created)}, {getTime(user.created)}
               {' has '} {user.karma.toLocaleString()} karma
            </p>
            <div className="">{user.about}</div>
         </div>
         <Posts items={user.submitted} />
      </>
   );
}

export default User;
