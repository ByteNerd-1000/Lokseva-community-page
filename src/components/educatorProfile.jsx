import React from "react";
import '../css/educator.css'
function Profile(props){
    return (
        <>
            <div className="profile-card">
                <div><img src={props.img} alt="profile_pic"/></div>
                <div><p>
                    {props.name}    
                </p></div>
               <div><p>
                    {props.role}
                </p></div>
                <div><p>
                    {props.desc}
                </p></div>
                <div>
                    <button>Linkedln</button>
                    <button>Twitter</button>
                </div>
            </div>
        </>
    )
}

export default Profile

