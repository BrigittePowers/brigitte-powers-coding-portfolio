const router = require('express').Router();

const projects = [];

// get all projects
router.get('/', async (req, res) => {
	res.render('all', { projects });
});
