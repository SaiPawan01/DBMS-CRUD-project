import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function List({ url }) {
  const [list, setList] = useState([]);


  const fetchList = async () => {
    const response = await axios.get(`${url}/api/restaurants/list`);
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data);
    }

  };


  useEffect(() => {
    fetchList();
  }, []);

  const removeRestaurant = async (Id) => {
    try {
      const response = await axios.post(`${url}/api/restaurants/delete`, { id: Id })
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message)
      }
      else {
        toast.error("error")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='list add flex-col'>
      <p>Available Restaurants</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>SL.NO</b>
          <b>Name</b>
          <b>Restaurant ID</b>
          <b>address</b>
          <b>website</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>{index + 1}</p>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.address}</p>
              <p>{item.website}</p>
              <p onClick={() => removeRestaurant(item.id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default List;

