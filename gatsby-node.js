const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = require('./gatsby/on-create-node')
exports.createPages = require('./gatsby/create-pages')
