

import React from 'react'
import { NavLink  } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='h-20 flex justify-evenly items-center'>
      <NavLink exact activeClassName ={"active_class"}  to={"/"}> search</NavLink>
      <NavLink exact activeClassName ={"active_class"} to={"/result"}> result</NavLink>
      <NavLink exact activeClassName ={"active_class"} to={"/about"}> about</NavLink>
      <br />
      <a href="/">search</a>
      <a href="/result">result</a>
    </div>
  );
}

export default Menu
