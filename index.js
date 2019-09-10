const express = require('express')
const Places = require('./models/places')
require('./db/mongoose')

const app = express()
const port = process.env.port || 3000

app.get('/places/:id', async (req, res) => {
    try {
        const place = await Places.findById({ _id: req.params.id })
        // if(place) {
        //     console.log('found')
        // } else {
        //     console.log('not found')
        // }
        res.send({place})
    } catch (e) {
        res.status(404).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})