import React, { useState } from 'react';
import Data from '../Data';
import Card from './Card';
import '../../styles/project.css';

const Projects = () => {
	

	return (
		<div className='tab'>ç
			{Data.map((item) => {
                return (
				<Card item={item}/>
                )
			})}
		</div>
	);
};

export default Projects;
