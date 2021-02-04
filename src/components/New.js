import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import Loader from './Loader';
import Posts from './Posts';

function New() {
   const [loading, setLoading] = useState(true);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <Posts endpoint="newstories" loaded={() => setLoading(false)} />
         )}
      </>
   );
}

export default New;
