const express = require("express")
const mongoose = require("mongoose")
const exhbs = require("express-handlebars")

const todoRoutes= require('./routes/todos')

const app = express()
const PORT = 3000

//app.listen(PORT,()=> console.log("server has been started."))

const hbs = exhbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set('views', 'views')

// app.get('/,',(req,res)=>{
//     res.render()
// })

app.use(todoRoutes)

const conn = "mongodb+srv://enesberk1:enesberk1@cluster0.bp7ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function start(){
    try {

        await mongoose.connect(conn,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT,()=> console.log("server has been started."))
    } catch (error) {
        console.log(error)
    }
}
start()

