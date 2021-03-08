// Note: NodeJS doesnt have support 2015 modules, must use 'require'
// frontend will make use of 'import' syntax, bc of React
const express = require('express')
// might have several different express applications within a single project
// by calling express like a function, it generates a new app
// This app object is used to set up config to listen for incoming requests 
// routed to Expres
const app = express()


app.get('/', (req, res) => {
  res.send({hi: 'there'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT);

//http://localhost:5000/