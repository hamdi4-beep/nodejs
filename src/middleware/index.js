const express = require('express')
const multer = require('multer')
const { app } = require('../server')

const upload = multer({
    dest: '../public/uploads'
})

app.set('view engine', 'ejs')

app.use(express.static('../public'))

app.use(express.urlencoded({
    extended: true
}))

module.exports = {
    upload
}