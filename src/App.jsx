import React from "react"
import blood_camp from "./assets/blood-donation.webp"
import fundraiser_pic from "./assets/fundraiser.png"
import seminar_pic from "./assets/seminar-banner.png"
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Educator from "./pages/educatorPage"
import Testimonials from "./pages/testimonials"
import Homepage from "./pages/homePage"
import Aboutus from "./pages/aboutUsPage"
import { Link } from "react-router-dom"
import routes from "./routes/pagesRoutes"
import Navbar from "./components/Navbar"

function Main(){
    return (
        <>
            <main>
            <section class="content">

               <div class="banner-div">
                    <img src="" alt="website-banner" />
                    <button type="button">Join now</button>
                </div>
                <p>Our Past Achievements</p>
                <div class="prev-work">
                    <div class="blood-camp">
                        <p>Blood Doantion Camp</p> 
                        <img height="200px" src={blood_camp} alt="blood-donation-camp-pic"/>
                        <p>Details about how many people participated and the impact on the community</p> 
                    </div> 
                    <div class="Fundraiser">
                        <p>Fundraiser Camp</p> 
                        <img height="200px" src={fundraiser_pic} alt="fundraiser-banner"/>
                        <p>Impact of our community-driven fundraising campaigns.</p> 
                    </div> 
                    <div class="seminar">
                        <p>Seminar - Webinars</p> 
                     {/*   <!-- add images, dates, concise description --> */}
                        <img height="200px" src={seminar_pic} alt="seminar-banner"/>
                        <p> Key takeaways from our awareness and education seminars</p> 
                    </div> 
                </div>
                <div class="form-to-join-community">
                    <p id="community-title">Join Our Community Initiatives</p> 
                    <p id="community-desc">Be part of something bigger. Sign-up to participate in our upcoming community projects.</p> 
                  {/*  <!-- about contact information  --> */}
                </div>
                <div class="community-form">
                    <form>
                        <label for="username">Name:</label><br/>
                        <input type="text"required name="username" placeholder="Enter your full name:"/><br/>
                        <label for="email">Email:</label><br/>
                        <input type="email" required name="email" placeholder="Enter your Email:"/><br/>
                        <label for="contact">Contact Information:</label><br/>
                        <input type="tel" required name="contact" placeholder="Enter your Tel No:"/><br/>
                        <label for="interest-section">Area of Interest:</label><br/>
                        <select id="multpile-select" >
                            <option value="healthcare">Healthcare</option> 
                            <option value="education">Education</option>
                            <option value="fundraiser">Fundraiser</option>
                        </select><br/>
                        <label for="avaliability">Avaliability:</label><br/>
                        <input type="text" required name="avaliability" placeholder="Weekends, Evenings, etc."/><br/>
                        <input type="submit" name="join-button" value="Sign-up"/>
                    </form> 
                </div>
                <div class="form-to-join-educator">
                   {/* <!-- this should be another page just for educators it should include purpose and subjects which they can teach and how it benefits to students and leaners. --> */}
                    <p id="education-title">Free Education Community</p> 
                  {/*  <!-- use vidoes for more inertactive features color theme will be blue and make backend for all the cms about the works --> */}
                    <p id="education-desc">Volunteer as an Educator and help us provide free education to those in need.</p> 
                    <div class="education-form">
                        <form>
                            <label for="username">Name:</label><br/>
                            <input type="text" required name="username" placeholder="Enter your full name:"/><br/>
                            <label for="subjects">Subjects You Can Teach:</label><br/>
                            <input type="text" required name="subjects" placeholder="Subjects..."/><br/>
                            <input type="submit" name="join-button-educator" value="Sign-up as Educator"/>
                        </form> 
                    </div>
                    </div>
            </section>
        </main>
        </>
    )
} 

function Footer(){

return (
        <>
            <footer>
                {/*  homepage, our previous work section */}
                <div class="footer">
                    <p>	&#169; 2024 Lokseva - Imperium's Community Website</p> 
                </div> 
            </footer>
        </>
    )
}

function App() {
  return (
        <>
            <RouterProvider router={routes} />
        </>
  )
}

export default App 
