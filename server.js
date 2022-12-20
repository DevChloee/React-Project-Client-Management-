const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image': 'http://placeimg.com/64/64/1',
            'name' : 'Chloe jun',
            'birthday' : '940411',
            'gender' : 'female',
            'job' : 'programmer'
        },
        {
            'id':2,
            'image': 'http://placeimg.com/64/64/2',
            'name' : 'Sieun Lee',
            'birthday' : '960212',
            'gender' : 'female',
            'job' : 'student'
        },{
            'id':3,
            'image': 'http://placeimg.com/64/64/3',
            'name' : 'Dahee Lim',
            'birthday' : '900123',
            'gender' : 'female',
            'job' : 'designer'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));