import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Posts from './Posts';
import { usePosts } from '../hooks/usePosts';

function Home() {
   const [loading, setLoading] = useState(true);
   const posts = usePosts('topstories');

   useEffect(() => {
      if (posts.length) setLoading(false);
   }, [posts]);

   return <>{loading ? <Loader /> : <Posts posts={posts} />}</>;
}

export default Home;
