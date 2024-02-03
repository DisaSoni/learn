import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js';
import  MenuCard  from './MenuCard';

const Resturant = () => {
    //React Hooks useState Hook

    const[menuData, setMenuData] = useState(Menu);

  return ( //menuData is prop method that fetch all data 
    <>
      <MenuCard menuData ={menuData}/>  
    </>
  );
};

export default Resturant;