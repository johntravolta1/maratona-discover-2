// import {express} from express

const express = require("express");

const server = express();

const routes = require("./routes")

const path = require("path")

//usando template engine
server.set('view engine','ejs');

server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics
server.use(express.static("public"))


server.use(express.urlencoded({extended:true}));

server.use(routes);


//npm run dev
server.listen(3000, () => console.log(__dirname));
