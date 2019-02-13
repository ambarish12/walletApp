const express = require('express');
const app = express();
const port = 3000;
const db = require('./dao/mongoQueries');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/money', (req, res) => res.send('money aint easy'));

app.get('/transactions', (req, res) => {
    db.getTxns()
        .then((txns)=>res.json({"result":txns}))
        .catch((err)=>{
            console.error(err);
            res.status(400).json({
                "error":"unable to fetch transactions"
            })
        });
});
app.post('/transactions', (req, res) => {

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));