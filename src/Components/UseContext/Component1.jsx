/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Component2 from './Component2';

const Component1 = () => {
  const [user,setUser] = useState ({name:'abcd', Id:1})
  return (
    <UserContext.Provider value = {user}>
      <Component2/>
    </UserContext.Provider>
  );
};

export default Component1;