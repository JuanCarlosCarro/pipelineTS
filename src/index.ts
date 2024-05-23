import Server from './provider/Server';
import {PORT,NODE_ENV} from './config';
import express from 'express';

import MascotaController from './controllers/MascotaController';
import ClienteController from './controllers/ClienteController';


const server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true})
    ],
    controllers:[

        MascotaController.instance,
        ClienteController.instance
    ]
});

server.init();