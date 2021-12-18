var last;

const displayDiv = (event) => {
	// grab the ID in data-id that also matches to the project info div
	let id = event.target.getAttribute('data-id');

	// match to the corresponding project info div
	let target = document.getElementById(id);

	if (target.style.display !== 'block') {
		if (last) {
			last.style.display = 'none';
		}
		target.style.display = 'block';
	} else {
		target.style.display = 'none';
	}

	last = target;
};

document.querySelector('.bubbles').addEventListener('click', displayDiv);
console.log('Listening for click');
