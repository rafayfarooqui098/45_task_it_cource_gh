"use strict";
//from 2nd method
//name in Titlecase
let personName = 'rafAy farOOqui';
let Titlecasename = personName.replace(/\b\w/g, c => c.toUpperCase());
console.log(`name in titlecase , ${Titlecasename}`);
