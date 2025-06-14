const express = require('express');
const cors = require('cors');
const pool = require('./config/database.js')

const fetchRouter = require('./routes/fetchRoute.js')
const foodRouter = require('./routes/foodRouter.js');
const {categoryRouter} = require('./routes/categoryRouter.js');


const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/restaurants',fetchRouter)
app.use('/api/food_items',foodRouter)
app.use('/api/food_category',categoryRouter)

app.get('/api/user/list',async (req,res)=>{
    try{
        const list = await pool.promise().query(`select * from customerView`)
        res.json({success:true,data:list})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
})
app.get('/api/orders/list',async (req,res)=>{
    try{
        const list = await pool.promise().query(`select * from orders`)
        res.json({success:true,data:list})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
})





app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});