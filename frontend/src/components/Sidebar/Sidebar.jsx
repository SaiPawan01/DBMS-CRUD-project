import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import {assets} from '../../assets/assets.js'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="sidebar-options">

        <NavLink to='/list_restaurant' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Restaurants</p>
        </NavLink>

        <NavLink to='/add_restaurant' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add New Restaurant</p>
        </NavLink>

        <NavLink to='/list_foods' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Food Items</p>
        </NavLink>

        <NavLink to='/add_foods' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add New Food Item</p>
        </NavLink>

        <NavLink to='/list_category' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Categories</p>
        </NavLink>

        <NavLink to='/add_category' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add New Category</p>
        </NavLink>

        <NavLink to='/list_users' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Users</p>
        </NavLink>

        <NavLink to='/list_orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
