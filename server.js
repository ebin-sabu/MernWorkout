require('dotenv').config()

const express = require('express')
const WorkoutRoutes = require('./routes/workout')

const app = express()

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
/*
app.get('/', (req, res) =>{
    res.json({mssg: 'App Starting up!'})
})
*/
app.use('/api/workouts', WorkoutRoutes)


app.listen(process.env.PORT,() =>{
    console.log('listening on port',process.env.PORT)
})

process.env