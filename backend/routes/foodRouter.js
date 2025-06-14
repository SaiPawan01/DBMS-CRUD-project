const express = require('express')
const {fetchFood,addFood, deleteFood} = require('../controllers/foodController.js')



const foodRouter = express.Router()


foodRouter.get('/list',fetchFood)
foodRouter.post('/add_item',addFood)
foodRouter.post('/delete_item',deleteFood)


module.exports = foodRouter


