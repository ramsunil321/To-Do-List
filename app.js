const express = require("express")
const bodyparser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

var items = ["html", "css", "javascript"]
let workitems = []
app.use(bodyparser.urlencoded({extended : true}))

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get("/", function(req,res){
    

    let day = date.getDate()
   
    res.render("list", {listTitle : day, newlistitems : items})
})

app.post("/",function(req,res){
   var item =  req.body.newItem
    if(req.body.list == "work"){
        workitems.push(item)
        res.redirect("/work")
    } else{
        items.push(item)
         res.redirect("/")
    }
    

})

app.get("/work",function(req,res){
    res.render("list",{listTitle : "work list", newlistitems : workitems})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("Server started 3000")
})


