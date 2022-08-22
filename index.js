const express = require('express')
const app = express()

app.set('view engine', 'hbs') //set view enggine
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

let isLogin = true

app.get('/', function(req, res) {
    res.render('index', {isLogin})
})

app.get('/contact', function(req, res) {
    res.render('contact')
})


app.get('/detail/:id', function(req, res) {
    let id = req.params.id

    console.log(id);
    res.render('detail', {
        id,
        title: 'Detail Project',
        message: 'Lorem ipsum',
        duration: '12 Desember 2020 - 12 Desember 2021'
    })
})

app.get('/add-project', function(req, res) {
    res.render('add-project')
})

app.post('/add-project', function(req, res) {
    let title = req.body.name
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let message = req.body.message
    let html = req.body.html
    let css = req.body.css
    let js = req.body.js
    let node = req.body.node

    // let data = {
    //     title,
    //     message,
    //     startDate,
    //     endDate,
    //     html,
    //     css,
    //     js,
    //     node
    // }
    
    // console.log(data);

    console.log(title);
    console.log(startDate);
    console.log(endDate);
    console.log(message);
    console.log(html);
    console.log(css);
    console.log(js);
    console.log(node);

    res.redirect('/')
})

// app.post('/add-project', function(req, res) {
//     console.log(req.body);
//     let title = req.body.name
//     // let startDate = req.body.startDate
//     // let endDate = req.body.endDate
//     let message = req.body.message

//     console.log(title);
//     // console.log(startDate);
//     // console.log(endDate);
//     console.log(message);

//     res.redirect('/')
// })

app.listen(3000, function() {
    console.log(`Example app listening on port`)
})   