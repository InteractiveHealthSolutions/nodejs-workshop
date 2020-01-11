const fs = require('fs');

exports.readFile = (fileName) => {
    return new Promise (function(resolved, reject) {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolved(data);
            }
        });
    });
}
