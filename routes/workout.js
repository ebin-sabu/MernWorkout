const express = require('express')
const Workout = require('../models/WorkoutModel')

const router = express.Router()

router.get('/',(req, res) =>{
    res.json({mssg: 'GET all Workouts'})
})

router.get('/:id',(req, res) =>{
    res.json({mssg: 'GET a single Workout'})
})

router.post('/',async (req, res) =>{
    const{title, weight, reps} = req.body
    try{
        const workout = await Workout.create({title, weight, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id',(req, res) =>{
    res.json({mssg: 'DELETE a Workout'})
})

router.patch('/:id',(req, res) =>{
    res.json({mssg: 'UPDATE a Workout'})
})


module.exports = router