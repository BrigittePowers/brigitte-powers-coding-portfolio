import React from 'react';

const Nav = ({ currentTab, handleTabChange }) => {
	return (
		<div>
			<ul className='nav nav-bar'>
				<li className='nav-item'>
					<a
						href='#about'
						onClick={() => handleTabChange('About')}
						className={
							currentTab === 'About'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a
						href='#projects'
						onClick={() => handleTabChange('Projects')}
						className={
							currentTab === 'Projects'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						Projects
					</a>
				</li>
				<li className='nav-item'>
					<a
						href='#contact'
						onClick={() => handleTabChange('Contact')}
						className={
							currentTab === 'Contact'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
