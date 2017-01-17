var fs = require('fs');
var rsaPemToJwk = require('rsa-pem-to-jwk');

var private_key = fs.readFileSync('../../private_key.pem');
var public_key = fs.readFileSync('../../public_key.pem');

var jwk = rsaPemToJwk(private_key, {}, 'public');

console.log(jwk);
