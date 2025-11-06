const otpGenerator = require('otp-generator')

const senhas = otpGenerator.generate(6, { upperCaseAlphabets: true, lowerCaseAlphabets: true, specialChars: true });

console.log(senhas);

