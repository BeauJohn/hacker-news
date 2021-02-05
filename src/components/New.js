import React, { useState, useEffect } from 'react';
import { usePosts } from '../hooks/usePosts';
import Loader from './Loader';
import Posts from './Posts';

function New() {
   const [loading, setLoading] = useState(true);
   const posts = usePosts('newstories');

   useEffect(() => {
      if (posts.length) setLoading(false);
   }, [posts]);

   return <>{loading ? <Loader /> : <Posts posts={posts} />}</>;
}

export default New;
