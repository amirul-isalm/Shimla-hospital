import React, { createContext } from 'react';
import LoadData from '../LoadData/LoadData';
import useFirebase from "../Firebase/useFirebase"
export const myContext=createContext()
const Contecxt = ({ children }) => {
    const { services, blogs, exparts } = LoadData();
   const usefirebaseByContext=useFirebase()
    return (
      <myContext.Provider value={{ services, blogs, exparts,usefirebaseByContext }}>
        {children}
      </myContext.Provider>
    );
};

export default Contecxt;