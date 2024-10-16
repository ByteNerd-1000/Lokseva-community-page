
import React from "react";
import blood_camp from "../assets/blood-donation.webp"; // Assuming image paths are correct
import fundraiser_pic from "../assets/fundraiser.png";
import seminar_pic from "../assets/seminar-banner.png";
import website_banner from "../assets/website-banner.jpg";
import "../css/futurework.css";

function FutureWork() {
    return (
        <>
            {/* Banner Section */}
            <div className="banner-div">
                <div className="banner-content">
                    <h1 className="banner-title">Join Lokseva's Community</h1>
                    <p className="banner-subtitle">Contribute to ongoing and upcoming community projects.</p>
                    <button type="button" className="join-button">Join Now</button>
                </div>
            </div>

            {/* Past Achievements Section */}
            <section className="achievements-section">
                <h2 className="section-title">Our Past Achievements</h2>
                <div className="prev-work">
                    <div className="prev-work-item blood-camp">
                        <h3 className="work-title">Blood Donation Camp</h3>
                        <img height="200px" src={blood_camp} alt="blood-donation-camp-pic" />
                        <p className="work-desc">
                            Our recent Blood Donation Camp saw over 200 participants, impacting lives and contributing to the local blood banks.
                        </p>
                    </div>

                    <div className="prev-work-item fundraiser">
                        <h3 className="work-title">Fundraiser Camp</h3>
                        <img height="200px" src={fundraiser_pic} alt="fundraiser-banner" />
                        <p className="work-desc">
                            Through community-driven efforts, our fundraising campaigns helped raise significant contributions for various causes.
                        </p>
                    </div>

                    <div className="prev-work-item seminar">
                        <h3 className="work-title">Seminars and Webinars</h3>
                        <img height="200px" src={seminar_pic} alt="seminar-banner" />
                        <p className="work-desc">
                            Key takeaways from our educational seminars and webinars focused on spreading awareness about health, education, and environmental issues.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FutureWork;
