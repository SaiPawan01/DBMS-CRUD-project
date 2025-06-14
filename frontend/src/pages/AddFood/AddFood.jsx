import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import {toast} from 'react-toastify';
import axios from 'axios'

function AddFood({url}) {
    const [foodItem, setFoodItem] = useState({
        name: "",
        type: "",
        category_id: "",
        price: "",
        restaurant_id: ""
    })

    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setFoodItem(foodItem => ({...foodItem,[name]:value}))
    }


    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post(`${url}/api/food_items/add_item`,foodItem);

        if(response.data.success){
            setFoodItem({
                name:"",
                type:"",
                category_id:"",
                price:"",
                restaurant_id:""
            })
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
        }
        catch(error){
            console.log(error)
        }

        
    }
    

    useEffect(()=>{
        console.log(foodItem);
    })


    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>

                <div className="add-product-name flex-col">
                    <p>Item Name : </p>
                    <input onChange={onChangeHandler} value={foodItem.name} type="text" name="name" id="" placeholder='type here' />
                </div>


                <div className="add-product-name flex-col">
                    <p>Type : </p>
                    <input onChange={onChangeHandler} value={foodItem.type} type="text" name="type" id="" placeholder='type here' />
                </div>

                <div className="add-product-name flex-col">
                    <p>Category Id : </p>
                    <input onChange={onChangeHandler} value={foodItem.category_id} type="text" name="category_id" id="" placeholder='type here' />
                </div>

                <div className="add-product-name flex-col">
                    <p>Price: </p>
                    <input onChange={onChangeHandler} value={foodItem.price} type="text" name="price" id="" placeholder='type here' />
                </div>
                
                <div className="add-product-name flex-col">
                    <p>Restaurant Id : </p>
                    <input onChange={onChangeHandler} value={foodItem.restaurant_id} type="text" name="restaurant_id" id="" placeholder='type here' />
                </div>

                
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    );
}

export default AddFood
