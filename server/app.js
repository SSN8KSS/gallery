const express = require('express');

const app = express();
const port = 3000;
//test
const schema = require('../database/schema.js');
const Users = schema.User;
const Photos = schema.Photo;
const Hotels = schema.Hotel;
