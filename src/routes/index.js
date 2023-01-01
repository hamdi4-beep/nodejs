const { app } = require('../server')
const { upload } = require('../middleware')
const { resolve, join } = require('path')
const fs = require('fs')

const path = resolve('../views')
const handler = upload.single('file')

app.get('/', (req, res) => res.render(resolve(path)))

app.get('/user', (req, res) => {
    fs.readFile(resolve('../public/user.html'), 'utf-8', (err, text) => {
        errHandle(err)
        res.send(text)
    })
})

app.post('/', (req, res) => {
    const body = req.body

    handler(req, res, next => {
        const file = req.file
        fs.renameSync(file.path, file.destination + '\\' + file.originalname)
    })
})

function errHandle(err) {
    if (err) {
        throw Error(err)
    }
}