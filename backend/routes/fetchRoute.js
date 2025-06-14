const express = require('express')
const {fetchRestaurant,addRestaurant,deleteRestaurant} = require('../controllers/fetchController.js')


const fetchRouter = express.Router()

fetchRouter.get('/list',fetchRestaurant)
fetchRouter.post('/add',addRestaurant)
fetchRouter.post('/delete',deleteRestaurant)



module.exports =  fetchRouter;