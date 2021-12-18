import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './tabs/About';
import Projects from './tabs/Projects';

const Header = () => {
	const [currentTab, setCurrentTab] = useState('About');

	const renderTab = () => {
		if (currentTab === 'About') {
			return <About />;
		}
		if (currentTab === 'Projects') {
			return <Projects />;
		}
	};

	const handleTabChange = (tab) => setCurrentTab(tab);

	return (
		<div>
			<Nav currentTab={currentTab} handleTabChange={handleTabChange} />
			{renderTab()}
			<Footer />
		</div>
	);
};

export default Header;
