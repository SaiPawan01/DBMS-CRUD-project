const pool = require('../config/database.js')


const fetchCategoryList = async (req,res)=>{
    try{
        const list = await pool.promise().query('select * from food_category')
        res.json({success:true,data:list})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
} 


const deleteCategory = async (req,res)=>{
    try{
        const id = req.body.id
        await pool.promise().query(`delete from food_category where id=${id}`)
        res.json({success:true,message:"category deleted"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error occured"})
    }
}

const insertCategory = async (req,res)=>{
    try{
        const {name,description} = req.body;
        await pool.promise().query('insert into food_category(name,description) values(?,?)',[name,description])
        res.json({success:true,message:"added category"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

module.exports = {fetchCategoryList,deleteCategory,insertCategory}