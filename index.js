const express = require('express')
const Places = require('./models/places')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/places/:id', async (req, res) => {
    try {
        const place = await Places.findById({ _id: req.params.id })
        res.send({place})
    } catch (e) {
        res.status(404).send(e)
    }
})

process.stdout.on('error', function( err ) {
    if (err.code == "EPIPE") {
        process.exit(0);
    }
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})