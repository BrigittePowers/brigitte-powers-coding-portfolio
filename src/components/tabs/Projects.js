import React, { useState } from 'react';
import Data from '../Data';
import Card from './Card';

const Projects = () => {
	

	return (
		<div className='tab'>
			<h1>Projects</h1>
			{Data.map((item) => {
                return (
				<Card item={item}/>
                )
			})}
		</div>
	);
};

export default Projects;
