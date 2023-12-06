/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
const Component4 = () => {
    const user = useContext(UserContext)
    // console.log(user);
    const {name} = user;
    return (
        <div>
            <h1>{name}</h1>
            
        </div>
    );
};

export default Component4;