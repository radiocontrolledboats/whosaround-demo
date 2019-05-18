// TODO: Use feathers
// https://docs.feathersjs.com/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	// Homepage here
	res.send('hello world');
});

app.get('/register/:name/:location', (req, res) => {

});

app.listen(process.env.PORT || 3000);
