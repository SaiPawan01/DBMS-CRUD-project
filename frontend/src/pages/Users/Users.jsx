import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Users({url}) {
    const [list, setList] = useState([]); 

    
    const fetchList = async () => {
      const response = await axios.get(`${url}/api/user/list`);
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
          <div className="list-table-format title">
            <b>SL.NO</b>
            <b>User Name</b>
            <b>user ID</b>
            <b>registered_date</b>
            <b>registered_time</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <p>{index+1}</p>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>{item.registered_date}</p>
                <p>{item.registered_time}</p>
                
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Users
