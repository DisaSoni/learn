import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js';
import  MenuCard  from './MenuCard';


const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    )
]
//Spred operator if you use many time code like curElem

const Resturant = () => {
    //React Hooks useState Hook

    const[menuData, setMenuData] = useState(Menu);

    const filterItem =(category) => {
        const updateList =Menu.filter((curElem) =>{
            return curElem.category === category;
        });
        setMenuData(updateList);
    };

  return ( //menuData is prop method that fetch all data 
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={() => filterItem("Party")}>
            Party
            </button>
            <button className='btn-group__item' onClick={() => filterItem("SoftGlam")}>SoftGlam</button>
            <button className='btn-group__item' onClick={() => filterItem("Natural")}>Natural</button>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
        </div>
    </nav>

      <MenuCard menuData ={menuData}/>  

    </>
  );
};

export default Resturant;