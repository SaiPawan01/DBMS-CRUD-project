import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListFood.css'
import { toast } from 'react-toastify';


function ListFood({url}) {

    const [foodList,setFoodList] = useState([]);

    const fetchFood = async () => {
        const response = await axios.get(`${url}/api/food_items/list`);
        console.log(response.data)
        if(response.data.success){
          setFoodList(response.data.data[0]);
        }
    };


    const removeItem=async(Id)=>{
        try{
          const response = await axios.post(`${url}/api/food_items/delete_item`,{id:Id})
          await fetchFood();
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
    
    


    useEffect(()=>{
        fetchFood();
        console.log(foodList)
    },[]);


    return (
        <div className='list add flex-col'>
            <p>Available Food Items</p>
            <div className='list-table'>
                <div className="list-table-food-format title">
                    <b>SL.NO</b>
                    <b>Name</b>
                    <b>Item Id</b>
                    <b>price</b>
                    <b>type</b>
                    <b>category</b>
                    <b>restaurant_id</b>
                    <b>Action</b>
                </div>
                {foodList.map((item, index) => {
                    return (
                        <div key={index} className="list-table-food-format">
                            <p>{index+1}</p>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                            <p>{item.price}</p>
                            <p>{item.type}</p>
                            <p>{item.category}</p>
                            <p>{item.restaurant_id}</p>
                            <p onClick={()=>{removeItem(item.id)}} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListFood
