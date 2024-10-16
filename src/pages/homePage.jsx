
import React from "react";
import { Link } from "react-router-dom";
import homebanner from "../assets/tenweb_media_82QqpEIi.webp";
import "../css/homepage.css"; // Importing the new CSS file
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OngoingWork from "../components/ongoingwork.jsx";
import FutureWork from "../components/futurework.jsx";

function Homepage() {

    const { hash } = useLocation(); // Get the current URL hash
    console.log(hash);

    useEffect(() => {
        // If there is a hash in the URL
        if (hash) {
            const elementId = hash.replace('#', ''); // Remove the '#' from the hash
            const element = document.getElementById(elementId); // Get the element by ID
            if (element) {
                // Scroll to the element with smooth behavior
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]); // Runs when the hash changes

    return (
        <>
            <section className="homepage-intro">
                <div className="intro-content">
                    <img src={homebanner} height={500} width={800} alt="homepagepic" /> {/* Increased the width */}
                    <div className="overlay">
                        <h2>Join Our Community Events</h2>
                        <p>
                            Discover the joy of participating in our community events.
                            Engage with like-minded individuals and make a difference in your community.
                        </p>
                        <div className="intro-buttons">
                            <Link to='/join'>
                                <button>Get Involved</button>
                            </Link>
                            <Link to='/join'>
                                <button>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <OngoingWork />
        <FutureWork />
        </>
    );
}

export default Homepage;
