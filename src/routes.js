const { json } = require('express')
const express = require('express')
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')
//objeto literal: vou criar o objeto e já colocar as propriedades dele 
// const Job = {


// }

var os = require('os');
os.userInfo().username
console.log(os.userInfo().username)

var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];
var loginId = path.join("domainName",userName);
console.log(loginId);

routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id',JobController.show)
routes.post('/job/:id',JobController.update)
routes.post('/job/delete/:id',JobController.delete)
routes.get('/profile',ProfileController.index)
routes.post('/profile',ProfileController.update)


module.exports = routes;