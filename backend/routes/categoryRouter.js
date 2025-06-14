const express = require('express')
const { fetchCategoryList, deleteCategory,insertCategory } = require('../controllers/categoryController.js')


const categoryRouter = express.Router()


categoryRouter.get('/list',fetchCategoryList)
categoryRouter.post('/delete',deleteCategory)
categoryRouter.post('/add',insertCategory)

module.exports = {categoryRouter}