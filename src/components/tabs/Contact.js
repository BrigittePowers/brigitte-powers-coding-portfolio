import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/contact.css';

const onSubmit = (data) => {
	console.log(data);
};

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
				<form onSubmit={handleSubmit(onSubmit)} className='form'>
					<div className='form-row'>
						<label htmlFor='name' placeholder='Name'>
							Name:
						</label>
						<input
							type='text'
							{...register('name', {
								required: true,
							})}
						/>
					</div>
					<div className='form-row'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							{...register('email', {
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
						/>
					</div>
					<div className='form-row'>
						<label>Subject:</label>
						<input type='text' {...register('subject')} />
					</div>
					<div className='form-row'>
						<label>Message:</label>
						<textarea
							type='text'
							{...register('message', { required: true })}
						/>
					</div>
					<div className='form-row'>
						<button type='submit'>Reach Out</button>
					</div>
				</form>
				{errors.email && <p>Please enter a valid email</p>}
			</div>
		</div>
	);
};

export default Contact;
