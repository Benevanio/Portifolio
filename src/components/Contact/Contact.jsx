import React from 'react'
import './Contact.scss'
const Contact = () => {
    return (
        <div className="Form">
            <form>
                <label>Your name</label>
                <input type="text" name="name" />
                <label>
                    Your email
                </label>
                <input type="email" name="email" />
                <label>
                    Subject
                </label>
                <input type="text" name="subject" />
                <label>
                    Message
                </label>
                <textarea rows="6" placeholder='Write your message here...' />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact