import React from 'react';
import usePosts from '../hooks/usePosts';
import Post from './Post';

function Posts({ endpoint, limiter }) {
   const posts = usePosts(endpoint, limiter);
   console.log(posts);

   return (
      <ul>
         {posts.map((post) => (
            <Post key={post.id} {...post} />
         ))}
      </ul>
   );
}

export default Posts;
