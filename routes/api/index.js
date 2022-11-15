const routes = require("express").Router();

routes.use("/transcription", require("../../module/transcription/route"));
routes.use("/upload", require("../../module/fileUpload/route"));
routes.use("/score", require("../../module/score/route"))


module.exports = routes;