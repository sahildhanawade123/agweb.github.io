const express = require('express')
const app = express()
const port =process.env.PORT || 5000
const nodemailer = require('nodemailer')
const dotenv=require('dotenv')
// const path=require('path')

dotenv.config({path:'./config.env'})

require('./db/dbconn')
const collection=require('./models/collectionconn')

app. use(express. json())
app. use(express. urlencoded({ extended: true }))


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailsenderag@gmail.com',
      pass: 'mailsenderag123'
    }
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/contactinfo',async(req,res)=>{
    const {name,email,message}=req.body
    if(!name || !email || !message){
        res.status(400)
    }
    else{
        const contactdata=new collection(req.body)
        const result=await contactdata.save()



        var mailOptions = {
            from: 'mailsenderag@gmail.com',
            to: 'amol360@gmail.com',
            subject:``,
            text: `name=>${name}            email=>${email}              message=>"${message}"`
                    
                   
          }


          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })




        if (result) {
            res.status(200).json("We have Received your Message We will Reply you Soon")
        }
        else{
            res.status(400).json("Please Try after Some Time")
        }
    }
})



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})