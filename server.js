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
            'name' : 'Chloe Jun',
            'birthday' : '940411',
            'gender' : 'female',
            'job' : 'programmer'
        },
        {
            'id':2,
            'image': 'http://placeimg.com/64/64/2',
            'name' : 'Diana Jean',
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
        },{
            'id':4,
            'image': 'http://placeimg.com/64/64/4',
            'name' : 'Suzy Bae',
            'birthday' : '981021',
            'gender' : 'female',
            'job' : 'singer'
        },{
            'id':5,
            'image': 'http://placeimg.com/64/64/5',
            'name' : 'Jieun Lee',
            'birthday' : '901225',
            'gender' : 'female',
            'job' : 'Actress'
        },{
            'id':6,
            'image': 'http://placeimg.com/64/64/6',
            'name' : 'Sunhwa Han',
            'birthday' : '881021',
            'gender' : 'female',
            'job' : 'Hair designer'
        },{
            'id':7,
            'image': 'http://placeimg.com/64/64/7',
            'name' : 'Soyoon Jeon',
            'birthday' : '970712',
            'gender' : 'female',
            'job' : 'President'
        },{
            'id':8,
            'image': 'http://placeimg.com/64/64/8',
            'name' : 'Jihye Lee',
            'birthday' : '940123',
            'gender' : 'female',
            'job' : 'Teacher'
        },{
            'id':9,
            'image': 'http://placeimg.com/64/64/9',
            'name' : 'Taehee Kim',
            'birthday' : '86829',
            'gender' : 'female',
            'job' : 'Doctor'
        },{
            'id':10,
            'image': 'http://placeimg.com/64/64/10',
            'name' : 'Yuna Kim',
            'birthday' : '800214',
            'gender' : 'female',
            'job' : 'Professor'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));