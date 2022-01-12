//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const http = require('https');
let data = [];
var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
// // var options = {
// //     host: 'www.random.org',
// //     path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new',
// // };
// }
http.get(url, (res) => {
    let str = '';
    res.on('data', (chunk) => {
        str += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(str);
        // console.log(str);
    });
    res.on('error', (err) => {
        console.log(err);
    });
});
router.get('/', (req, res, next) => {
    res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS\
        items: data,
    });
});
module.exports = router;