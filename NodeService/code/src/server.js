import express from 'express';
import {Client} from 'eureca.io';

let app = express();
let env = process.env;
let port = env["PORT"];
let geoLocation = env["GEO_LOCATION"];

const  client = new Client({uri: geoLocation});
let proxyStub;

app.get('/service', (req, res)=>{
    res.status(200);
    res.json({"service" : geoLocation});
});

client.ready((proxy)=>{
    proxyStub = proxy;

    app.get('/test', function (req, res) {
        res.status(200);
        res.json(proxyStub.hasOwnProperty("GetById"));
    });
});

app.listen(port);
console.log('Running on http://localhost');
