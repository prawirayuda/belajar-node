const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/product/:id' , (req, res) => {
  // res.send ('Product ID : ' + req.params.id + '<br>Category ID : ' + req.params.IdCat)
    // res.send (`Product ID : ${req.params.id} <br> Category : ${req.params.IdCat}`)
    res.send (`Product ID : ${req.params.id} <br> Category : ${req.query.category}`)
  

})

app.get('/about', (req, res) => {
  res.json({ user: 'tobi' })
})

app.use('/', (req, res) =>{

 res.sendFile ('./index.html', { root: __dirname })

})

app.listen(port, () => {
  console.log(`Apps listening at http://localhost:${port}`)
})