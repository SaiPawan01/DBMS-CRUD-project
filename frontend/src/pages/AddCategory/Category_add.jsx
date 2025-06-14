import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import axios from 'axios'

function Category_add({url}) {

  const [data,setData] = useState({
    name:"",
    description:""
})

const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
}


const onSubmitHandler = async (event)=>{
    event.preventDefault();

    const response = await axios.post(`${url}/api/food_category/add`,data);

    if(response.data.success){
        setData({
            name:"",
            description:""
        })
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }
}


useEffect(()=>{
    console.log(data);
})
return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>

            <div className="add-product-name flex-col">
                <p>Category Name : </p>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" id="" placeholder='type here' />
            </div>


            <div className="add-product-name flex-col">
                <p>Description : </p>
                <input onChange={onChangeHandler} value={data.description} type="text" name="description" id="" placeholder='type here' />
            </div>

            

            
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
);
}

export default Category_add
