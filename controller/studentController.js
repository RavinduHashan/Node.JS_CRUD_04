const Student = require('../models/Student')


const add = (req, res) =>{
    const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        grade: req.body.grade

    })
    newStudent.save()
    .then( () =>{
        res.json("Student Added")
    })
    .catch((err) =>{
        console.log(err)
    })
}

const get = (req, res) => {
    Student.find()
    .then((students) => {
        res.json(students)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const update = (async (req, res) => {
    let userId = req.params.id
    const {name, age, gender, grade} = req.body
    const updateStudent = {
        name,
        age,
        gender,
        grade
    }
    const updatedocument = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
        res.status(200).send({status:"User updated"})
    })
    .catch(() => {
        res.status(500).send({status:"Error with updating data"})
    })
    
})

const deleteUser = (async (req, res) =>{
    let userId = req.params.id

    await Student.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User delete"})
    }) 
    .catch(() => {
        res.status(500).send({status: "Error with delete user", error: err.message})
    })
})

const getOneUser = (async (req, res) =>{
    let userId = req.params.id
    const user =  await Student.findById(userId)
    .then((student) => {
        res.status(200).send({status: "Get the user" , student})
    }) 
    .catch(() => {
        res.status(500).send({status: "Error with delete user", error: err.message})
    })
})

module.exports ={ add, get, update, deleteUser, getOneUser}