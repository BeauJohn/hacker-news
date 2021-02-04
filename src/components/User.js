import React, { useEffect, useState } from 'react';
import { getUser } from '../api/Request';

function User(props) {
   const { userName } = props.match.params;
   return <div>{userName}</div>;
}

export default User;
