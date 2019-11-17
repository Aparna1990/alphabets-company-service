const express = require('express');
const server = express();
const configs = require('./configs/config');
const routes = require('./src/routes/company-routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


class AppLoader { 
    constructor() { 
        this.configs = configs;
        this.dependencies = {};
        this.dependencies.mongoDB = this.dbinit(this.configs);
        this.dependencies.mongoose = mongoose;
        this.dependencies.logger = console;
        this.route = new routes(this.configs, this.dependencies);
        
    }

    dbinit(configs){
        let url = `mongodb://localhost:27017/alphabets`;
        mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        if(!db)
            console.log("Error connecting db")
        else
            console.log("Db connected successfully")
        return db;
    }

    init() { 
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.listen(this.configs.server.port);
        this.dependencies.logger.log(`App is listening at ${this.configs.server.port}`);
        this.initializeRoutes(server);
    }

    initializeRoutes(server) { 
        this.route.registerRoutes(server);
    }
}

module.exports = AppLoader;