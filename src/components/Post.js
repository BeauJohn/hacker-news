import React from 'react';
import { Link } from 'react-router-dom';
import { getDate, getTime } from '../_utils';

function Post({ by, title, url, time, kids = [] }) {
   return (
      <li className="my-4 text-base">
         <a
            target="_blank"
            rel="noreferrer noopener"
            href={url}
            className="block text-titleRed  font-bold"
         >
            {title}
         </a>
         <p className="block text-sm text-base">
            {'By '}
            <Link className="underline" to={`users/${by}`}>
               {by}
            </Link>
            {' on '}
            {getDate(time)}, {getTime(time)}
            {' with '}
            <span>{kids.length} comments</span>
         </p>
      </li>
   );
}

export default Post;
