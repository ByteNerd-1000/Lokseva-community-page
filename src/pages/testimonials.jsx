
import React from "react";
import Reviewcard from "../components/reviewCard.jsx";
import "../css/testimonials.css"; // Import the CSS file

function Testimonials() {
    return (
        <>
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <p>Community Voices</p>
                    <p>
                        Hear from our community! Discover how Lokseva has impacted lives and
                        fostered connections.
                    </p>
                </div>
                <div className="review-container">
                    <Reviewcard className="review-card" />
                </div>
                <div className="testimonial-action">
                    <p>Share Your Experience</p>
                </div>
                <div className="submit-testimonial">
                    <p>Submit Your Testimonials</p>
                    <p>
                        We value your feedback and would love to hear about your experience with
                        Lokseva. Please fill out the form below to share your story.
                    </p>
                    <form>
                        <label htmlFor="username">Name</label>
                        <input type="text" required name="username" placeholder="Enter your name" />
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" required name="email" placeholder="Enter your Email" />
                        
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            cols={50}
                            placeholder="Type Your Message"
                        ></textarea>
                        
                        <hr />
                        
                        <input type="checkbox" value="terms" required name="terms" id="terms" />
                        <label htmlFor="terms">I accept the terms</label>
                        
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Testimonials;
