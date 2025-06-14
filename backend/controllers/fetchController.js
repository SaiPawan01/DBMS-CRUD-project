const pool = require('../config/database.js');

const fetchRestaurant = async (req, res) => {
    try {
        // Using the promise-based version of the query
        const [rows] = await pool.promise().query('SELECT * FROM restaurants');
        res.json({ success: true, data: rows });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ success: false, message: 'Error fetching data' });
    }
};


const addRestaurant = async (req,res)=>{

        const { name, open_time, close_time, address, website, phone } = req.body;

        try{
            const command =`INSERT INTO restaurants(name, open_time, close_time, address, website, phone) VALUES (?,?,?,?,?,?)`;
            await pool.promise().query(command,[name, open_time, close_time, address, website, phone])
            res.json({success:true,message:"Restaurant Added"})
        }
        catch(error){
            console.log(error)
            res.json({success:false,message:"error"})
        }
};


const deleteRestaurant = async (req,res)=>{
    const unique_id = req.body.id;
    try{
        await pool.promise().query(`delete from restaurants where id=${unique_id}`);
        res.json({success:true,message:"restaurant deleted"})
    }
    catch(error){
        res.json({success:false,message:'errorr'})
    }
}

module.exports = { fetchRestaurant,addRestaurant,deleteRestaurant};
