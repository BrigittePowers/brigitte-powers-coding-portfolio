const router = require('express').Router();

const projects = [
	{
		id: 1,
		project_name: 'Glowing Cheatsheet',
		live_link:
			'https://brigittepowers.github.io/wk2-project-css-cheatsheet/',
		repo_link:
			'https://github.com/BrigittePowers/wk2-project-css-cheatsheet',
		skill: 'HTML | CSS',
		description:
			'A webpage that holds a collection of useful CSS boilerplate as well as demonstrating the boilerplate on the site itself.',
		date: 'AUG 2021',
		image: 'snippet.png',
	},
	{
		id: 2,
		project_name: 'Password Generator',
		live_link: 'https://brigittepowers.github.io/bpowers-hw3-password-gen/',
		repo_link: 'https://github.com/BrigittePowers/wk3-password-gen',
		skills: 'HTML | JS',
		description:
			'The purpose of this project was to create a password generator that is able to take user-selected criteria and output a randomized password containing all requirements. The code is designed to first accept user criteria that needs to be in the password. It then generates a password and runs it through a validation function to make sure the randomized password fits all user-expected criteria. The code is also optimized for instances where the user might try to generate a password with no criteria selected or criteria outside of accepted parameters. In these instances, the interface will inform the user of any missing criteria.',
		date: 'AUG 2021',
		image: '',
	},
];

// {
//     id: ,
//     project_name: '',
//     live_link: '',
//     repo_link: '',
//     skills: '',
//     description: '',
//     date: '',
//     image: ''
// },

// get all projects
router.get('/', async (req, res) => {
	res.render('home', { projects });
});

module.exports = router;
