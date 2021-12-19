import React, { useState } from 'react';

const Card = ({ item }) => {
	const [display, setDisplay] = useState('block');

	const style = {
		card: {
			display: { display },
		},
	};
	return (
		<div>
			<div style={style.card} className='project-card' key={item.id}>
				<div className='links'>
					{item.live_link ? (
						<a
							href={item.live_link}
							target='_blank'
							aria-label={item.project_name}
						>
							<i className='fas fa-link' aria-hidden='true'></i>
						</a>
					) : (
						<></>
					)}
					<a
						href={item.repo_link}
						target='_blank'
						aria-label='Go to Git Repository'
					>
						<i className='fab fa-github' aria-hidden='true'></i>
					</a>
				</div>
				<h3 className='project-card-title'>{item.project_name}</h3>
				<div className='project-card-skill'>
					<span>{item.date} -- </span>
					<span>{item.skill}</span>
				</div>
				<p className='project-card-description'>{item.description}</p>
				<img
					className='pic'
					data-id={item.id}
					src={item.image}
					alt='Preview screenshot'
				/>
			</div>
		</div>
	);
};

export default Card;
