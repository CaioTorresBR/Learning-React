// importing express 
const app = require('express')(); // app represents the api 
const PORT = 3000;
// imports cors
const cors = require('cors');

app.use(cors());

// handle the get request (incoming data)
app.get('/poutine', (req, res) => {

    // returns a json object with some information
    res.status(200).send({
        potatoes: 'frites', 
        gravy: 'sauce',
        happiness: 'bonheur'
    })
});

// fire up the api on the server
app.listen(
    PORT,
    // callback to know when the api is ready
    () => console.log(`it's alive on http://localhost:${PORT}`)
)