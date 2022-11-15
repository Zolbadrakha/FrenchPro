const asyncHandler = require('express-async-handler');
const fs = require('fs');

//Read txt file
const score = fs.readFileSync('hello.txt', 'utf-8',);


module.exports = asyncHandler(async (req, res) => {
    res.send({score: score})
})

