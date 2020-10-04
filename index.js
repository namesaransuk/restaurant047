const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

//Middleware เพื่ออ่าน req.body (ไว้ต่อจากแอพเพื่อทำทีละ step)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use('/api',restaurantRouter);
app.use('/',indexRouter);


// app.get('/', (req, res) => {
//     res.send('<h1>RESTFul API</h1>');
// });

app.listen(3000, ()=>{
    console.log('Listen to port 3000');
});