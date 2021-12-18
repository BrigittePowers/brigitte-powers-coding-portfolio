import React from 'react';
import Fitness from '../../assets/previews/fitness.png';
import Sword from '../../assets/previews/sword.jpg';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';
// import Fitness from '../../assets/previews/fitness.png';

const Bubble = ({ display, setDisplay, item }) => {
	return (
		<div className='bubbles' id='bubbles'>
			<button type='button' onClick={() => setDisplay('block')}>
				<img
					className='pic'
					data-id={item.id}
					src={Fitness}
					alt='Preview screenshot'
				/>
			</button>
		</div>
	);
};

export default Bubble;
