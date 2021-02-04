import React from 'react';
import Post from './Post';
import { usePosts } from '../hooks/usePosts';

function Posts({ endpoint, loaded, posts = [] }) {
   posts = posts.filter((post) => post !== null);

   if (endpoint) {
      const posts = usePosts(endpoint);
   }

   return (
      <ul>
         {posts.map((post) => (
            <Post key={post.id} {...post} />
         ))}
      </ul>
   );
}

export default Posts;
