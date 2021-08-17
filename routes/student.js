const router = require('express').Router()
const Student = require('../controller/studentController')

router.post('/add', Student.add)
router.get('/get', Student.get)
router.put('/update/:id', Student.update)
router.delete('/delete/:id', Student.deleteUser)
router.get('/getoneuser/:id', Student.getOneUser)

module.exports = router

