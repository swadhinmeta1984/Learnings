import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDomServer from 'react-dom/server';
import StaticRouter from 'react-router-dom';

import App from '../src/App';

const port = 8080;
var app = express();

app.use('/build', express.static('build'));

app.get('*', (req, res) =>{
    const context = {};
    const app = ReactDomServer.renderToString(
        //<StaticRouter location={req.url} context={context}>
            <App/>
        //</StaticRouter>
    )
    
    console.log('myapp...',app)
    
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) =>{
        if(err) {
            console.log('Error..');
            return res.status(500).send('opps', 'error');
        }
        
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
    })
    

});

app.use(express.static(path.resolve(__dirname, '..', 'build')));
//app.use(router);

app.listen(port, ()=> {
    console.log('SSR is Running')
})
