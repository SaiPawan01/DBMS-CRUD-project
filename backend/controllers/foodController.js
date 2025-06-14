const pool = require('../config/database.js')


const fetchFood =async (req,res)=>{
    const command = `select fd.id,fd.name,fd.price,fd.type,fc.name as category,fd.restaurant_id from food_items fd,food_category fc where fd.category_id=fc.id;`
    try{
        const rows = await pool.promise().query(command);
        res.json({success:true,data:rows})
    }
    catch(err){
        console.log(error)
        res.json({success:false,message:"error"})
    }
};


const addFood = async (req,res)=>{
    const {name,type,category_id,price,restaurant_id} = req.body

    try{
        await pool.promise().query(`insert into food_items(name,type,category_id,price,restaurant_id) values(?,?,?,?,?)`,[name,type,category_id,price,restaurant_id])
        res.json({success:true,message:"food item added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error adding item"})
    }
};


const deleteFood = async (req,res)=>{
    const key = req.body.id
    try{
        await pool.promise().query(`delete from food_items where id=${key}`)
        res.json({success:true,message:"item delete"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error occured"})
    }
}


module.exports = { fetchFood,addFood,deleteFood}