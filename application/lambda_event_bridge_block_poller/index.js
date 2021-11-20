"use strict";

const AWS = require("aws-sdk");

exports.handler =  async (event) => {
    const payload = {
      date: new Date(),
      message: 'Hello Terraform World'
    };
    return JSON.stringify(payload);
  };