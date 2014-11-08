'use strict';

var express = require('express');
var controller = require('./post.controller');
var fileupload = require('fileupload').createFileUpload(__dirname + '/uploadDir').middleware;
var router = express.Router();

router.get('/', controller.index);
router.put('/addImages/:id', controller.addImages);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);



module.exports = router;
