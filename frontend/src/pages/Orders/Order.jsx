import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css'

function Order({url}) {
    const [list, setList] = useState([]);


    const fetchList = async () => {
      const response = await axios.get(`${url}/api/orders/list`);
      console.log(response.data)
      if (response.data.success) {
        setList(response.data.data[0]);
      }
  
    };
  
  
    useEffect(() => {
      fetchList();
    }, []);
  
  
    return (
      <div className='list add flex-col'>
        <p>Available Restaurants</p>
        <div className='list-table'>
          <div className="list-table-order-format title">
            <b>SL.NO</b>
            <b>Customer Id</b>
            <b>Food Id</b>
            <b>Restaurant Id</b>
            <b>Ordered Date</b>
            <b>Ordered Time</b>
            
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-order-format">
                <p>{index + 1}</p>
                <p>{item.customer_id}</p>
                <p>{item.food_id}</p>
                <p>{item.restaurant_id}</p>
                <p>{item.ordered_date}</p>
                <p>{item.ordered_time}</p>
                
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Order
