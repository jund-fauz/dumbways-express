import express from 'express'

const app = express()

app.set('view engine', 'hbs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000')
})