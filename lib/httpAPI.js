/*
* RESTy HTTP API
* Copyright (c) 2018 imHashd
*/

const http = require("http");
const url  = require("url");

class httpAPI {
    constructor(port) {
        this._serverRunning = false;
        this._port = port;
    }

    start(port) {

    }

    get(path, callback) {

    }
}

module.exports = httpAPI;