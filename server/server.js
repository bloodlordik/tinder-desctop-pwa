const express = require('express')
const app = express()
const {port, root} = require('config')




function server() {
    app.get(root, (req, res ) => {
        res.send('helo44444')
    })
    
    return app.listen(port)
}

module.exports.app = server