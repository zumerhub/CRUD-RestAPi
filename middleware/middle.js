const fs = require("fs");

function logReqRes(req, res, next) {
    fs.appendFile(
        "log.txt", 
        `${new Date().toISOString()} - ${req.ip} ${req.method} ${req.url}\n`,
         (err, data) => {
        next();
    });
}

module.exports = {
    logReqRes,
};