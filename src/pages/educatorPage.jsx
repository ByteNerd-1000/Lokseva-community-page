
import React from "react";
import educator_banner from "../assets/educatorBanner.png";
import Profile from "../components/educatorProfile";
import pic1 from "../assets/profile1.png";
import pic2 from "../assets/profile2.png";
import pic3 from "../assets/profile3.png";
import "../css/educator.css";

function Educator() {
    return (
        <div className="educator-container">
            <div>
                <h3>Empowering Our Community Through Education</h3>
                <p>
                    Educators play a crucial role in shaping the future of our community.
                    They not only impart knowledge but also inspire and motivate individuals
                    to engage in various initiatives. By fostering a culture of learning and 
                    collaboration, educators help bridge gaps and create opportunities for 
                    growth. Their dedication to nurturing talent and encouraging participation 
                    is essential for the success of community projects. Join us in celebrating 
                    the invaluable contributions of our educators, who are the backbone of our 
                    community’s progress.
                </p>
            </div>

            <div>
                <img src={educator_banner} alt="Educator Banner" className="educator-banner"/>
            </div>

            <div>
                <h3>Meet Our Educators</h3>
                <p>Discover the inspiring individuals who are shaping our community through education and engagement.</p>
            </div>

            <div className="profile-container">
                <Profile 
                    name="Dr. Anjali Sharma" 
                    role="Lead Educator" 
                    desc="Dr. Sharma specializes in community development and has been instrumental in organizing workshops." 
                    img={pic1} 
                />
                <Profile 
                    name="Mr. Raj Patel" 
                    role="Community Outreach Coordinator" 
                    desc="Mr. Patel focuses on connecting with local schools to promote educational initiatives." 
                    img={pic2} 
                />
                <Profile 
                    name="Ms. Priya Desai" 
                    role="Workshop Facilitator" 
                    desc="Ms. Desai leads hands-on workshops that engage community members in learning." 
                    img={pic3} 
                />
            </div>

            <div className="call-to-action">
                <h4>Join Our Community Initiatives</h4>
                <p>Become a part of Lokseva's mission to empower learners and share your knowledge. Sign up to teach and inspire others in our community.</p>
                <button>Register Now</button>
                <button>Learn More</button>
            </div>
        </div>
    );
}

export default Educator;
