import React from 'react';
import Post from './Post';

function Posts({ posts = [] }) {
   posts = posts.filter((post) => post.type === 'story');

   return (
      <ul>
         {posts.map((post) => (
            <Post key={post.id} {...post} />
         ))}
      </ul>
   );
}

export default Posts;
