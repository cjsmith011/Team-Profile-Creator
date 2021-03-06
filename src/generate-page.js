const fs = require(`fs`);
const { resolve } = require("path/posix");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                //return out of the function to make sure the promise doesn't execute
                return;
            }
            //if it worked, resolve the promise and let the user know
            resolve({
                ok: true,
                message: 'Your team is built!  Go to dist/index.html and launch in your browser!'
            });
        });
    });
};


module.exports = {
    writeFile: writeFile,
    };