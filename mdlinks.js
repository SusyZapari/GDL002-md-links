#!/usr/bin/env node
const mdlinksModule = require('./index.js');

console.log(
    mdlinksModule.mdLinks(process.argv[2], '')
)

