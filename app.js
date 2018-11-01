// todo:

"use strict";

const DATA_HANDLER = require('./node/DataHandler');

class app {
    constructor() {
        this.data_handler = new DATA_HANDLER();
        this.ejsData = null;
        this.user = null;
        this.loadServer();
    }

    loadServer() {
        const HTTP = require('http');
        const PORT = process.env.PORT || 8558;
        const EJS = require('ejs');

        HTTP.createServer((request, response) => {

            let httpHandler = (error, string, contentType) => {
                if (error) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end('An error has occurred: ' + error.message);
                } else if (contentType.indexOf('css') >= 0 || contentType.indexOf('js') >= 0) {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end(string, 'utf-8');
                } else if (contentType.indexOf('html') >= 0) {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end(EJS.render(string, {
                        data: this.ejsData,
                        filename: 'index.ejs'
                    }));
                } else {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end(string, 'binary');
                }
            };

            if (request.method === 'POST') {
                if (request.headers['x-requested-with'] === 'XHR00') {
                    this.data_handler.getRowCount((count) => {
                        count = count.toString();
                        response.writeHead(200, {'content-type': 'text/plain'});
                        response.end(count);
                    });
                } else if (request.headers['x-requested-with'] === 'XHR0') {
                    DATA_HANDLER.setBaseData('zip', (zipData) => {
                        zipData = JSON.stringify(zipData);
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(zipData);
                    });
                } else if (request.headers['x-requested-with'] === 'XHR1') {
                    DATA_HANDLER.setBaseData('hills', (hillsData) => {
                        hillsData = JSON.stringify(hillsData);
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(hillsData);
                    });
                } else if (request.headers['x-requested-with'] === 'XHR2') {
                    DATA_HANDLER.setBaseData('lifts', (liftsData) => {
                        liftsData = JSON.stringify(liftsData);
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(liftsData);
                    });
                } else if (request.headers['x-requested-with'] === 'XHR3') {
                    DATA_HANDLER.setBaseData('patrollers', (patrollersData) => {
                        patrollersData = JSON.stringify(patrollersData);
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(patrollersData);
                    });
                } else if (request.headers['x-requested-with'] === 'XHR4') {
                    request.on('data', (data) => {
                        DATA_HANDLER.handleUserData(data.toString('utf8'), (user) => {
                            if (user !== 'false') {
                                response.writeHead(200, {'content-type': 'application/json'});
                                response.end(user);
                            } else {
                                response.writeHead(200, {'content-type': 'text/plain'});
                                response.end('false');
                            }
                        });
                    });
                } else if (request.headers['x-requested-with'] === 'XHR5') {
                    const FORMIDABLE = require('formidable');
                    let formData = {};
                    new FORMIDABLE.IncomingForm().parse(request).on('field', (field, name) => {
                        formData[field] = name;
                    }).on('error', (err) => {
                        next(err);
                    }).on('end', () => {
                        DATA_HANDLER.addData(formData);
                        formData = JSON.stringify(formData);
                        response.writeHead(200, {'content-type': 'text/plain'});
                        response.end("done");
                    });
                } else if (request.headers['x-requested-with'] === 'XHR6') {
                    DATA_HANDLER.generateResultsData((fetchedData) => {
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(JSON.stringify(fetchedData));
                    });
                } else if (request.headers['x-requested-with'] === 'XHR7') {
                    this.data_handler.getAllData((data) => {
                        data = JSON.stringify(data);
                        response.writeHead(200, {'content-type': 'application/json'});
                        response.end(data);
                    });
                } else if (request.headers['x-requested-with'] === 'fetch.0') {
                    // const PARSER = require('querystring');
                    let body = '';
                    request.on('data', chunk => {
                        body += chunk.toString();
                    });
                    request.on('end', () => {
                        this.data_handler.insertRow(body);
                        // console.log(PARSER.parse(body));
                    });
                } else if (request.headers['x-requested-with'] === 'fetch.1') {
                    let criteria = '';
                    request.on('data', (data) => {
                        criteria += data.toString();
                    });
                    request.on('end', () => {
                        this.data_handler.queryData(criteria, (data) => {
                            data = JSON.stringify(data);
                            response.writeHead(200, {'content-type': 'application/json'});
                            response.end(data);
                        });
                    });
                } else {
                    response.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
                    response.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
                }
            } else if (request.url.indexOf('.css') >= 0) {
                DATA_HANDLER.renderDom(request.url.slice(1), 'text/css', httpHandler, 'utf-8');
            } else if (request.url.indexOf('.js') >= 0) {
                DATA_HANDLER.renderDom(request.url.slice(1), 'application/javascript', httpHandler, 'utf-8');
            } else if (request.url.indexOf('.png') >= 0) {
                DATA_HANDLER.renderDom(request.url.slice(1), 'image/png', httpHandler, 'binary');
            } else if (request.url.indexOf('.woff') >= 0) {
                DATA_HANDLER.renderDom(request.url.slice(1), 'application/font-woff', httpHandler, 'utf-8');
            } else if (request.url.indexOf('.ttf') >= 0) {
                DATA_HANDLER.renderDom(request.url.slice(1), 'application/font-ttf', httpHandler, 'utf-8');
            } else if (request.url.indexOf('results.html') >= 0) {
                DATA_HANDLER.renderDom('public/views/results.html', 'text/html', httpHandler, 'utf-8');
            } else if (request.url.indexOf('skiRental.html') >= 0) {
                DATA_HANDLER.renderDom('public/views/skiRental.html', 'text/html', httpHandler, 'utf-8');
            } else if (request.url.indexOf('helmetRental.html') >= 0) {
                DATA_HANDLER.renderDom('public/views/helmetRental.html', 'text/html', httpHandler, 'utf-8');
            } else if (request.url.indexOf('/') >= 0) {
                DATA_HANDLER.renderDom('public/views/index.ejs', 'text/html', httpHandler, 'utf-8');
            } else {
                DATA_HANDLER.renderDom(`HEY! What you're looking for: It's not here!`, 'text/html', httpHandler, 'utf-8');
            }
        }).listen(PORT);
    }
}

module.exports = app;