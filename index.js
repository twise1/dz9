const users = [
    {
        id:1,
        name:"Tony Stark",
        role:"Legendary Avenger",
    },
    {
        id:2,
        name:"Thor Odinson",
        role:"The oldest Avenger",
    },
    {
        id:3,
        name:"Steven Strange",
        role:"New Avenger",
    },
]
const express = require("express");
const app = express();

app.put("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);
  
    if (userIdx !== -1) {
      const newUser = users[userIdx];
      newUser.name = "Mr. " + newUser.name;
      users[userIdx] = { ...newUser, ...req.body };
      res.json(users[userIdx]);
    } else {
      res.status(404).json();
    }
  });
  app.get('/user/:id' , function (req,res){
    res.send(JSON.stringify(users.find((item) => item.id == req.params.id)));
  });

app.listen(3021, function(){
    console.log("Сервер запущен под номером 3000");
})