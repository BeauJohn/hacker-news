import React from 'react';

function Post({ by, title, url, time, kids = [], ...props }) {
   return (
      <li>
         <a
            target="_blank"
            rel="noreferrer noopener"
            href={url}
            className="block text-red-700 text-base"
         >
            {title}
         </a>
         <p className="block text-sm">
            by {by} on with {kids.length} comments
         </p>
      </li>
   );
}

export default Post;
