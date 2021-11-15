const router = require('express').Router();

const projects = [
	{
		id: 1,
		project_name: 'Glowing Cheatsheet',
		live_link:
			'https://brigittepowers.github.io/wk2-project-css-cheatsheet/',
		repo_link:
			'https://github.com/BrigittePowers/wk2-project-css-cheatsheet',
		skill: 'Html;CSS',
		description:
			'A webpage that holds a collection of useful CSS boilerplate as well as demonstrating the boilerplate on the site itself.',
		date: 'August 2021',
	},
];

// {
//     id: ,
//     project_name: ,
//     live_link: ,
//     repo_link: ,
//     skills: [
//         {

//         }
//     ],
//     description: ,
//     date:
// },

// get all projects
router.get('/', async (req, res) => {
	res.render('home', { projects });
});

module.exports = router;
