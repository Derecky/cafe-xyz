import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";

import { router } from './routes/';

createConnection().then(async connection => {

    const app = express();
    app.use(express.json());
    app.use(router);

    app.listen(3333,() => {
        console.log("YEAAAH!! The App is running on port: 3333");
    });


}).catch(error => console.log(error));
