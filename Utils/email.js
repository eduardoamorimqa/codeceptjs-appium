const emailgenerator = require("random-email-generator");

const emails = emailgenerator.generateEmail(10, 'gmail');

console.log(emails);

