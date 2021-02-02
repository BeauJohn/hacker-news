import React from 'react';

function Post({ by, title, url, time, kids = [] }) {
   const dateObjFromUnix = (time) => {
      return new Date(time * 1000);
   };

   const getDate = (time) => {
      const date = dateObjFromUnix(time);
      return date.toLocaleDateString('en-GB');
   };

   const getTime = (time) => {
      const date = dateObjFromUnix(time);
      return date.toLocaleTimeString('en-GB', {
         hour: 'numeric',
         minute: '2-digit',
         hour12: true
      });
   };

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
            by {by} on {getDate(time)}, {getTime(time)} with {kids.length}{' '}
            comments
         </p>
      </li>
   );
}

export default Post;
