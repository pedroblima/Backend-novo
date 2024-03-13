const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const introducao = require('./routes/introducao')
const N1 = require('./routes/N1')
const N2 = require('./routes/N2')
const N3 = require('./routes/N3')

app.use('/', introducao)
app.use('/N1', N1)
app.use('/N2', N2)
app.use('/N3', N3)

app.listen(3000, function(){
    console.log('Server UP port 3000')
})