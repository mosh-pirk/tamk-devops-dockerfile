const express = require('express')
const app = express()
const port = 4001

app.get('/', (req, res) => res.send('<h1>DevOps Kurssi</h1><h2>COMP.SE.140 COMP.SE.140 Continuous Development and Deployment - DevOps </h2>'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))