const express = require("express");
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const { exec } = require('child_process')
const asyncHandler = require('express-async-handler')

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({path: './config/config.env'});

const app = express();
app.use(fileUpload({
    createParentPath: true,
    // limits: { 
    //     fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    // },
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));
app.use("/uploads", express.static('uploads'));


//Command line

exec('echo 94 > hello.txt', (error, stdout, stderr) => {
    if(error) {
        console.log( error)
    }
})

//Read txt file

function readData(err, data) {
    console.log(data);
}
fs.readFile('hello.txt', 'utf-8', readData);



app.listen(process.env.PORT, console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа...`))