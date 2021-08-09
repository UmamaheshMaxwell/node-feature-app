var http = require('http') // core module
//console.log(http)

//var express= require('express')
//console.log(express)

var log = require('./2.Log')
log.info('This is will just give information')
log.warn('This is will be a warning')
log.error('This is an error')