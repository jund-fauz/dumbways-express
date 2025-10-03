import express from 'express'

const app = express()

app.set('view engine', 'hbs')
app.set('views', './src/views')
app.use('/assets', express.static('src/assets'))
app.use(express.urlencoded({ extended: false }))

let projects = []

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/myProject', (req, res) => {
    res.render('myProject', { projects })
})

app.post('/myProject', (req, res) => {
    let { title, startDate, endDate, description, nodeJs, react, n, t } = req.body
    const duration = parseInt((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24 * 30))
    const id = projects.length
    nodeJs = nodeJs == '' ? 'a' : undefined
    react = react == '' ? 'a' : undefined
    n = n == '' ? 'a' : undefined
    t = t == '' ? 'a' : undefined
    projects.push({ id, title, startDate, endDate, description, nodeJs, react, n, t, duration })
    res.redirect('/myProject')
})

app.get('/detailProject', (req, res) => {
    const { id } = req.query
    const project = projects.find(proj => proj.id == id)
    res.render('detailProject', { project })
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000')
})