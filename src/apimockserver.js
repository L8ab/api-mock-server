const express = require("express");
class APIMockServer {
  constructor() {
    this.app = express();
  }
}
module.exports = APIMockServer;