const asyncHandler = require("express-async-handler");

module.exports = asyncHandler(async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "wav") to retrieve the uploaded file
            let wav = req.files.wav;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            wav.mv('./uploads/' + wav.name + ".wav");
            

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: wav.name,
                    mimetype: wav.mimetype,
                    size: wav.size
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    res.send()
  });