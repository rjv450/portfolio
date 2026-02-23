const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/docs/Rijo_varughese_resume-2026.pdf');

pdf(dataBuffer).then(function (data) {
    console.log("---BEGIN EXTRACTED CONTENT---");
    console.log(data.text);
    console.log("---END EXTRACTED CONTENT---");
}).catch(err => {
    console.error(err);
});
