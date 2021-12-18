import React from 'react';

function Footer() {
	return (
		<div id='contacts' className='contacts'>
			<div className='contact-info'>
				<nav className='social-media'>
					<ul>
						<li>
							<a
								href='https://github.com/BrigittePowers'
								target='_blank'
								aria-label="Go to Brigitte's Github account"
							>
								<i
									className='fab fa-github'
									aria-hidden='true'
								></i>
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/brigitte-powers'
								target='_blank'
								aria-label="Go to Brigitte's linkedin account"
							>
								<i
									className='fab fa-linkedin-in'
									aria-hidden='true'
								></i>
							</a>
						</li>
						<li>
							<a
								href='https://docs.google.com/document/d/1WLiAO7up4Sm-gYZnCbwnqV10gjN6aqjEMrihV4dpGLI/edit?usp=sharing'
								target='_blank'
								aria-label="Go to Brigitte's resume"
							>
								<i
									className='fab fa-google-drive'
									aria-hidden='true'
								></i>
							</a>
						</li>
						<li>
							<a
								href='./assets/uploads/Resume.pdf'
								target='_blank'
								aria-label="Download Brigitte's resume as a .pdf"
							>
								<i
									className='far fa-file-pdf'
									aria-hidden='true'
								></i>
							</a>
						</li>
					</ul>
				</nav>
				<span className='tagline'>
					Made by Brigitte - Powered by REACT
				</span>
			</div>
		</div>
	);
}

export default Footer;
