const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
//
const PORT = process.env.PORT || 2009;


//
const flash = require('express-flash');
const session = require('express-session');
// const pg = require("pg");
// const Pool = pg.Pool;

// const connectionString = process.env.DATABASE_URL || 'postgresql://sneakygoblin:codex123@localhost:5432/waiters';


// const { Client } = require('pg');

// const client = new Client({
//   connectionString,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
// client.connect(); 
app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }));
  app.use(flash());
  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');
  app.engine('handlebars', exphbs({
    layoutsDir: './views/layouts'
  }));
  app.use(express.static("public"))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
app.listen(PORT, function () {
  console.log("App started at port :", PORT);
})
app.get('/', async function (req, res) {
    // const counter = await greet.nameCounter()
    res.render("index", {
    //   counter
    })
  })
  app.get('/eggs', async function (req, res) {
    // const counter = await greet.nameCounter()
    res.render("eggs", {
    //   counter
    })
  })
  app.get('/bread', async function (req, res) {
    // const counter = await greet.nameCounter()
    res.render("bread", {
    //   counter
    })
  })
  app.get('/butter', async function (req, res) {
    // const counter = await greet.nameCounter()
    res.render("butter", {
    //   counter
    })
  })
  app.get('/cheese', async function (req, res) {
    // const counter = await greet.nameCounter()
    res.render("cheese", {
    //   counter
    })
  })