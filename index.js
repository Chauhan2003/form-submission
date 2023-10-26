const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/formdata', (req, res) => {
    const firstname = req.body['first-name'];
    const lastname = req.body['last-name'];
    const email  = req.body['email'];
    const phone = req.body['phone'];
    const country = req.body['country'];

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(country);

    res.send(`
    <h1>Hello ${firstname} ${lastname}, Your Form has been Submitted</h1>
    <h3>You Email is ${email}</h3>
    <h3>Your Phone Number is ${phone}</h3>
    <h3>You are from country ${country}</h3>
    `);

    // res.sendFile(__dirname + '/submit.html', (err) => {
    //     if(err){
    //         console.log(err);
    //         res.send("Facing Some error");
    //     }
    // });
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})