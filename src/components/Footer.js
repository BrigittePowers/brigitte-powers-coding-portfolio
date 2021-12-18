import React from 'react';

function Footer() {
	return (
		<div id='contacts' className='contacts'>
			<div className='section-header'>
				<h2 id='contacts'>Reach Out</h2>
				<h3>
					<a href='#home'>Return to top</a>
				</h3>
			</div>
			<div className='contact-info'>
				<p>
					<span>210 - 414 -5959</span>
					<br />
					<span>powers.brigitte@gmail.com</span>
					<br />
					<span>reyhn701@gmail.com</span>
				</p>
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
			</div>
		</div>
	);
}

export default Footer;
