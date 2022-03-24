const express = require('express')
const app =express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user_model')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const helmet = require("helmet");



app.use(helmet());
app.use(cors())
app.use(express.json())
app.use(cookieParser());

const PORT = process.env.PORT || 1337;


mongoose.connect('mongodb://localhost:27017/mern-123')  





//  app.post('/api/register',async (req,res)=>{
//     console.log(req.body)
//     try{
//         await User.create({
//             name: req.body.name,
//             lastname: req.body.lastname,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         res.json({status: 'ok'})
//     } catch(err){
//         console.log(err)
//         res.json({ status: 'error' , error: 'Duplicate email'})

//     }
// })

// let users={
//     email:"a1@gmail.com",
//     password: "ashstar"
// }

// app.get('/setuser', (req, res)=>{
//     res.cookie("userData", users);
//     res.send('user data added to cookie');
//     });

// app.get('/getuser', (req, res)=>{
//         //shows all the cookies
//         res.send(req.cookies);
//         });


app.post('/api/login',async (req,res)=>{
    // console.log(req.body);
    
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password,

        })


        if (user) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'secret123'
            )
    
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }

// if(user.password == req.body.password){
//     const token = jwt.sign(
//         {
//             email: user.email,
//             password:user.password,
//         }
//         , 'ashstar1143'
//     )
//     res.status(200).json({sucess : token});
//     // res.cookie("userData", user);
// }
// else{
//     res.status(400).json({sucess : false});

// }

})




app.listen(PORT,()=>{
    console.log('Server is running on 1337');
}) 