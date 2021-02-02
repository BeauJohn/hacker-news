import React, { useState, useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import Post from './Post';
import Loader from './Loader';

function Posts({ endpoint, limiter }) {
   const [loading, setLoading] = useState(true);
   const posts = usePosts(endpoint, limiter);

   useEffect(() => {
      if (posts.length) setLoading(false);
   }, [posts]);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <ul>
               {posts.map((post) => (
                  <Post key={post.id} {...post} />
               ))}
            </ul>
         )}
      </>
   );
}
export default Posts;
