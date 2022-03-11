import React, { useState, useEffect, createContext } from 'react';
import {Authenticated,Logout,login} from './Authe';

const UserContext=createContext();

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState([]);

      useEffect(()=>{
          const CheckUser=()=>{
          let user=Authenticated();
          if(user===null){
             localStorage.setItem('user','');
             user='';
          }
          setCurrentUser(user);
          };
          CheckUser(); 
      },[])

  return (<UserContext.Provider value={{currentUser,setCurrentUser,login,Logout}}>
       {children}
  </UserContext.Provider>)
}

export default UserContext;