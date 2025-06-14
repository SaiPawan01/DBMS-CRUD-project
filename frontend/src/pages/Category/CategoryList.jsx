import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './CategoryList.css'



function CategoryList({url}) {
    const [list, setList] = useState([]);

 
    const fetchList = async () => {
      const response = await axios.get(`${url}/api/food_category/list`);
      console.log(response.data)
      if (response.data.success) {
        setList(response.data.data[0]);
      }
  
      
    };
  
    useEffect(() => {
      fetchList();
    }, []);
  
    const removeCategory=async(Id)=>{
      try{
        const response = await axios.post(`${url}/api/food_category/delete`,{id:Id})
        await fetchList();
        if(response.data.success){
        toast.success(response.data.message)
        }
        else{
          toast.error("error")
        }
      }
      catch(error){
        console.log(error)
      }
    }
  
    return (
      <div className='list add flex-col'>
        <p>Available Categories</p>
        <div className='list-table'>
          <div className="list-table-category-format title">
            <b>SL.NO</b>
            <b>Name</b>
            <b>Description</b>
            <b>Category ID</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-category-format">
                <p>{index+1}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.id}</p>
                <p onClick={()=>removeCategory(item.id)} className='cursor'>X</p>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default CategoryList
