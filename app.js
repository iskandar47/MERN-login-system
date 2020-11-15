const exprees = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = exprees();

app.use(cookieParser());
app.use(exprees.json());

const URI = "mongodb+srv://salimdriai:Salimdr1892@cluster0.5yvav.mongodb.net/usersdata?retryWrites=true&w=majority";

/* mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> {
    console.log("successfuly connected to database")
}).catch((err)=>{
    console.log(err)
}); */
mongoose.connect(URI, {
    useNewUrlParser :true,
    useUnifiedTopology: true
}, ()=> {
    console.log("successfuly connected to database")
})

const userRouter = require("./routes/user.js");
app.use("./user", userRouter);

app.listen(5000, ()=> {
    console.log("server up and running on port 5000")
});