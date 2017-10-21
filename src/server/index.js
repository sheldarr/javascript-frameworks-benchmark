const chalk = require('chalk');
const express = require('express')
const path = require('path');
const winston = require('winston');

winston.configure({
    transports: [
        new winston.transports.Console({
            colorize: true,
            level: 'info'
        })
    ]
});

class Server {
    constructor () {
        this.application = express();

        this.setViewEngines(this.application);
        this.setStaticContent(this.application);
        this.setRoutes(this.application);
    }

    setViewEngines(application) {
        application.set('view engine', 'pug');
    }

    setStaticContent(application) {
        application.use('/public', express.static(path.normalize(`${__dirname}/../../public`)));
    }

    setRoutes(application) {
        application.get('/', function (request, respone) {
            respone.render('index', { title: 'JavaScript Frameworks Performance Benchamrk' });
        });

        application.get('/angularjs', function (request, respone) {
            respone.render('angularjs', { title: 'AngularJS implementation' });
        });

        application.get('/angular', function (request, respone) {
            respone.render('angular', { title: 'Angular implementation' });
        });

        application.get('/mithril', function (request, respone) {
            respone.render('mithril', { title: 'Mithril.js implementation' });
        });


        application.get('/react', function (request, respone) {
            respone.render('react', { title: 'React implementation' });
        });
        
        application.get('/vue', function (request, respone) {
            respone.render('vue', { title: 'Vue.js implementation' });
        });
    }

    start() {
        const { PORT: port } = process.env;

        this.application.listen(port, () => {
            winston.info(`${chalk.green('Server listening on port')} ${chalk.cyan(port)}`);
        })
    }
}

module.exports = Server;