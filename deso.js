import {Mnemonic} from 'https://raw.githubusercontent.com/iancoleman/jsbip39/master/jsbip39.js';
var m = new Mnemonic("english");
var words = m.generate();
console.log(words);
