import { useState, useEffect, useRef } from 'react';
import { getPosts } from '../api/Request';

function usePosts(endpoint, limiter) {
   const [posts, setPosts] = useState([]);
   const isMounted = useRef(null);

   useEffect(() => {
      const controller = new AbortController();
      isMounted.current = true;
      getPosts(endpoint, { signal: controller.signal }, limiter).then(
         (posts) => {
            if (isMounted.current) {
               setPosts(posts);
            }
         }
      );
      return () => {
         isMounted.current = false;
         controller.abort();
      };
   }, [endpoint, limiter]);

   return posts;
}

export default usePosts;
