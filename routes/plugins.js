var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
	next();
});

router.get('/datatables', function(req, res) {
	fs.readFile('data/datatable.json', function callback(err, data) {
		console.log(11111111)
		console.log(data);
		res.render('plugins/datatables', {
			title: 'jquey datatable',
			data: JSON.stringify(data)
		});
	});
});

router.get('/tab', function(req, res) {
	//
});

module.exports = router;