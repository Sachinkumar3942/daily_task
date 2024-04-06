import React from 'react'

import { IoMdHome } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { AiTwotoneBook } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='home'>
        <IoMdHome/>
        <div>Home</div>
      </div>
      <div className='home'>
        <CiUser/>
        <div>Users</div>
      </div>
      <div className='home'>
        <AiTwotoneBook/>
        <div>Transactions</div>
      </div>
      <div className='stat'>
        <BsGraphUp/>
        <div>Statistics</div>
      </div>
      <div className='home'>
        <IoMailOutline/>
        <div>Mails</div>
        <button className='bt'>12</button>
      </div>
      <div className='home'>
        <CiShop/>
        <div>Products</div>
      </div>
      <div className='home'>
        <CiCircleAlert/>
        <div>Reports</div>
        <button className='bt'>3</button>
      </div>
      <div className='home'>
        <IoMdSettings/>
        <div>Settings</div>
      </div>

      <div className='log'>
        <MdLogout/>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default Sidebar