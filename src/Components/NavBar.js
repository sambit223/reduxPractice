import React from 'react'
import {useSelector} from  'react-redux'

import { Link } from 'react-router-dom'

const NavBar = () => {
    const val = useSelector((state)=>state.cart) ;
  return (
    <div className='border w-[100vw] h-[10vh] flex justify-start items-center p-2 gap-2 space-x-2 mb-4'>
       <Link to={"/"}>Homepage</Link>
       <Link to={"/cart"}> cart</Link>
       <Link to={"/prac"}>Ur-todo-page</Link>
       <Link to={"/form"}>Form</Link>
       <Link to={"/page"}>pagination</Link>
       <div>Items in cart : {val.length}</div>
    </div>
  )
}

export default NavBar