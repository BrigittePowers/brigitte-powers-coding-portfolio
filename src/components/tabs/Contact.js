import React from 'react';
import '../../styles/contact.css';

const Contact = () => {
	return (
		<div className='tab'>
			<p className='contact-info'>
				<span>210 - 414 -5959</span>
				<br />
				<span>powers.brigitte@gmail.com</span>
				<br />
				<span>reyhn701@gmail.com</span>
			</p>
			<div className='form-wrapper'>
				<form className='form'>
					<div className='form-row'>
						<label>Name:</label>
						<input type='text' />
					</div>
					<div className='form-row'>
						<label>Email:</label>
						<input type='text' />
					</div>
					<div className='form-row'>
						<label>Subject:</label>
						<input type='text' />
					</div>
					<div className='form-row'>
						<label>Message:</label>
						<textarea type='text' />
					</div>
					<div className='form-row'>
						<button type='submit'>Reach Out</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
