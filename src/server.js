const { response } = require('express');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const {getData,setData} = require('./data/data')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

console.log(getData());


app.get("/", (req, res) => {
    const data = getData();
    res.status(200).json(data)
})
app.get("/todos", (req,res) => {
    const data = getData();
    res.status(200).json(data)
})
app.get("/todos/:id", (req,res) => {
    res.status(200).json(getData()[req.params.id])
    
})

//post
app.post("/todos", (req,res) => {
    res.status(201).json(setData(req.body))
})

//put
app.put("/todos/:id", (req,res) => {
    const todo = getData()[req.params.id]
    if(todo)
    {
        const {title, desc, completed} = req.body;
        todo.title = title;
        todo.desc = desc;
        todo.completed = completed;
        res.status(200).json({msg: 'Todo updated successfully'})
        return;
    }
    res.status(404).json({msg:"Todo not found"})
})
//delete
app.delete("/todos/:id", (req,res) => {
    const todoIndex = getData().findIndex((todo)=> (todo.id = req.params.id))
    console.log(todoIndex);
    if(todoIndex!== null)
    {
        getData().splice(todoIndex,1);
        res.status(200).json({ msg: 'Todo deleted'})
    }
    else
        res.status(404).json({ msg: 'Todo not found'})
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
