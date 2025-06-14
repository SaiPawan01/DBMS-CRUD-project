import { useEffect, useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import {toast} from 'react-toastify';
import axios from 'axios'


function Add({url}) {

    const [data,setData] = useState({
        name:"",
        open_time:"",
        close_time:"",
        address:"",
        website:"",
        phone:""
    })
    
    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }


    const onSubmitHandler = async (event)=>{
        event.preventDefault();

        const response = await axios.post(`${url}/api/restaurants/add`,data);

        if(response.data.success){
            setData({
                name:"",
                open_time:"",
                close_time:"",
                address:"",
                website:"",
                phone:""
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
                    <p>Restaurant Name : </p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" id="" placeholder='type here' />
                </div>


                <div className="add-product-name flex-col">
                    <p>Open Time: </p>
                    <input onChange={onChangeHandler} value={data.open_time} type="text" name="open_time" id="" placeholder='type here' />
                </div>

                <div className="add-product-name flex-col">
                    <p>Close Time : </p>
                    <input onChange={onChangeHandler} value={data.close_time} type="text" name="close_time" id="" placeholder='type here' />
                </div>

                <div className="add-product-name flex-col">
                    <p>Restaurant Address : </p>
                    <input onChange={onChangeHandler} value={data.address} type="text" name="address" id="" placeholder='type here' />
                </div>
                
                <div className="add-product-name flex-col">
                    <p>Website : </p>
                    <input onChange={onChangeHandler} value={data.website} type="text" name="website" id="" placeholder='type here' />
                </div>


                <div className="add-product-name flex-col">
                    <p>Contact NO: </p>
                    <input onChange={onChangeHandler} value={data.phone} type="text" name="phone" id="" placeholder='type here' />
                </div>

                
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    );
}

export default Add;
