import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })   
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contact" className="contact">
            <h6>Contact Me</h6>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"  name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div className="links">
                <ul>
                    <li>
                        <a title="Visit Myles Holt's GitHub Page" href="https://www.github.com/mbholt">GitHub</a>
                    </li>
                    <li>
                        <a title="Visit Myles Holt's LinkedIn Page" href="https://www.linkedin.com/in/myles-holt-63b006121/">LinkedIn</a>
                    </li>
                    <li>
                        <a title="Visit Myles Holt's Soundcloud Page" href="https://www.soundcloud.com/the-toothe">Soundcloud</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ContactForm;