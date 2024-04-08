const { ChildProcess } = require('child_process');
const { readFile } = require('fs');

const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            };
            resolve(data);
        });
    });
};

getText('./data/fourth.txt')
.then((result) => console.log(result))
.then(() => getText('./data/first.txt'))
.then((result) => console.log(result))
.catch(error => console.log(error));
