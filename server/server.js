require('dotenv').config();
let express = require('express');
const path = require('path');


let port = process.env.PORT || 8081;
let app = express();

app.use(express.static('build'))

app.get("/*", (req, res) => {
    // console.log(__dirname + '/../build');
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
})

app.listen(port)
console.log(`Listening on port ${port} ....`);