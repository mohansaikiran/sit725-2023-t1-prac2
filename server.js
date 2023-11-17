let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/compute',(req,res)=>{
    let num1 = req.query.number1; // this should return 1
    let num2 = req.query.number2; // this should return 2
    let type = req.query.type;
    let result;
    switch(type) {
        case "add": result = parseInt(num1) + parseInt(num2);
            break;
        case "subtract": result = parseInt(num1) - parseInt(num2);
            break;
        case "multiply": result = parseInt(num1) * parseInt(num2);
            break;
        case "divide": result = parseInt(num1) / parseInt(num2);
            break;
        default: console.log("Invalid");
    }
    let obj = {statusCode:200, message:'success', data:result}
    res.json(obj);
});

app.listen(port, ()=>{
    console.log('server started - 2');
});